/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */

import 'regenerator-runtime'
import '../styles/main.css'
import App from './views/app'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
})

app._initialAppShell()
