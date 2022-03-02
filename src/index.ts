import { dirname } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const mdiSvgPlugin: IconsaucePlugin = {
  prefix: 'mdi',
  regex: {
    code: /(mdi)(\/{1}[0-9a-z-]+){1,2}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `mdi/${path[2].replace(/[_]+/g, '-')}`,
  path: `${dirname(require.resolve('@mdi/svg/package.json'))}/**/*.svg`,
}

export default mdiSvgPlugin
module.exports = mdiSvgPlugin
