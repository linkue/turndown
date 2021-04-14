import config from './rollup.config'

export default config({
  output: {
    file: 'lib/turndown.browser.es.js',
    format: 'es',
    globals: {
      "jsdom-jscore-rn": "jsdomJscoreRn"
    }
  },
  browser: true
})
