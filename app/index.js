import { createHeader } from './header.js'
import { createNavBar } from './nav-bar.js'
import { createMain } from './main.js'
import Router from './router.js'
import './style.css'
function component () {
  var element = document.createElement('div')
  element.setAttribute('id', 'app')
  document.body.appendChild(element)
  createHeader()
  createNavBar()
  createMain()
}
component()
