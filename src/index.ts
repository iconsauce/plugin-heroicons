import { resolve } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const heroiconsPlugin: IconsaucePlugin = {
  prefix: 'hero',
  regex: {
    code: /(hero)(\/{1}[0-9a-z-]+){1}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: (libPath: RegExpMatchArray) => `hero/${libPath[2].replace(/[_]+/g, '-')}`,
  path: `${resolve('node_modules', 'heroicons')}/solid/**/*.svg`,
}

export default heroiconsPlugin
module.exports = heroiconsPlugin
