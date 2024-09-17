import {defineConfig} from '@rsbuild/core'
import {pluginReact} from '@rsbuild/plugin-react'
import {pluginSvgr} from '@rsbuild/plugin-svgr'
import {pluginEslint} from '@rsbuild/plugin-eslint'
import {pluginStyledComponents} from '@rsbuild/plugin-styled-components'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr(),
    pluginStyledComponents(),
    pluginEslint({
      eslintPluginOptions: {
        cwd: __dirname,
        configType: 'flat'
      }
    })
  ],
  html: {
    template: './public/index.html'
  },
  output: {
    distPath: {
      root: 'build'
    },
    assetPrefix: '/test/'
  },
  server: {
    port: 3000
  }
})
