import React, {useState, useEffect} from 'react'
import {Wrap, Content, Text, BtnRow, NextBtn} from './IntroductionStyle'
import Loader from '../Spinner/loader'
import {getTestInfo} from '../../network'

interface IntroductionProps {
  name: string
  setStep: (step: 'intro' | 'test') => void
}

interface Page {
  button: string
  text: string
}

const Introduction: React.FC<IntroductionProps> = ({name, setStep}) => {
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<Page[]>([])

  useEffect(() => {
    getTestInfo().then((res) => {
      const arr = res.split('-----')
      parsePages(arr)
    })
  }, [])

  const parsePages = (arr: string[]) => {
    const formatPages: Page[] = []
    arr.forEach((item) => {
      const obj: Partial<Page> = {}
      const match = /===.+?===/.exec(item)
      if (match) {
        obj.button = match[0].replace(/=/g, '')
        obj.text = item.replace(/===.+?===/g, '')
        formatPages.push(obj as Page)
      }
    })
    setPages(formatPages)
  }

  const nextHandler = () => {
    if (page === pages.length) setStep('test')
    setPage(page + 1)
  }

  const setText = (val: string) => {
    return {__html: val}
  }

  if (pages.length === 0) {
    return <Loader />
  }

  return (
    <Wrap>
      <Content>
        <Text dangerouslySetInnerHTML={setText(pages[page - 1].text.replace(/\[Name\]/g, name))}></Text>
        <BtnRow>
          <NextBtn onClick={nextHandler}>{pages[page - 1].button}</NextBtn>
        </BtnRow>
      </Content>
    </Wrap>
  )
}

export default Introduction
