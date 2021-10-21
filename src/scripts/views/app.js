/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/extensions
import DrawerInitiator from '../utils/drawer-initiator.js'
import UrlParser from '../routes/url-parser'
import routes from '../routes/router'

class App {
  constructor({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._initialAppShell()
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    })
  }
  // add other component

  async renderPage() {
    const url = UrlParser.parseActivateUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
