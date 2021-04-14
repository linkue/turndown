import config from './rollup.config'

export default config({
  output: {
    file: 'dist/turndown.js',
    format: 'iife',
    name: 'TurndownService',
    globals: {
      "jsdom-jscore-rn": "jsdomJscoreRn"
    }
  },
  browser: true
})
