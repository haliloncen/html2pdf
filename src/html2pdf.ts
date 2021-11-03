import * as puppeteer from 'puppeteer'

export interface Options {
  window: {
    width: string
    height: string
  }
  margin: string
}

/**
 * Create PDF from HTML content
 * 
 * @param {string} html HTML string
 * @param {Options} options PDF sizes & margin in px unit
 * 
 * example
 * import { createPDF } from '@haliloncen/html2pdf'
 * 
 * const html = '<h1>Hello World</h1>'
 * createPDF(html)
 *  .then(buffer => ...)
 *  .catch(err => ...)
 * 
 * async function() {
 *  const buffer = await createPDF(html, { window: { width: '1920px', height: '1080px' }, margin: '32px' })
 * }
 * 
 */
export async function createPDF(html: string, options: Options = { window: { width: '1920px', height: '1080px' }, margin: '32px' }) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle0' })

  const buffer = await page.pdf({
    width: options.window.width,
    height: options.window.height,
    printBackground: true,
    margin: {
      top: '32px',
      left: '32px',
      right: '32px',
      bottom: '32px'
    }
  })

  await browser.close()

  return buffer
}
