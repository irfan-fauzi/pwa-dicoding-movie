/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/extensions
import DrawerInitiator from '../utils/drawer-initiator.js'

class App {
  constructor({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    })
  }
}

export default App
