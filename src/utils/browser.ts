import { detect } from 'detect-browser'

export const browser = detect()

export const isIe = browser.name === 'ie'

export const isWindows = !(browser.os.toLowerCase().indexOf('windows') < 0)
