import header from './header.js'
import navBar from './nav-bar.js'
import main from './main.js'
import './style.less'
function renderComponent () {
  var element = document.createElement('div')
  element.setAttribute('id', 'app')
  element.appendChild(header)
  element.appendChild(navBar)
  element.appendChild(main)
  document.body.appendChild(element)
}

window.addEventListener('DOMContentLoaded', () => {
  renderComponent()
})