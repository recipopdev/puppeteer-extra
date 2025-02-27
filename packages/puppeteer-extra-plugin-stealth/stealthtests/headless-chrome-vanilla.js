const path = require('path')
const scriptName = path.basename(__filename)
const screenshotPath = path.join(__dirname, '_results', `${scriptName}.png`)

const puppeteer = require('puppeteer-core')

async function main() {
  console.log('start', scriptName)
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` // MacOS
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 800, height: 600 })
  await page.goto('https://bot.sannysoft.com/')
  await page.waitFor(5000)
  await page.screenshot({ path: screenshotPath, fullPage: true })

  await browser.close()
  console.log('end', screenshotPath)
}
main()
