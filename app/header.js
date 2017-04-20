import _ from 'lodash'
export function createHeader () {
  var header = document.createElement('div')
  header.setAttribute('id', 'header')
  var link = document.createElement('a')
  link.setAttribute('href', '/#/link')
  link.innerHTML = 'is link demo'
  header.appendChild(link)
  var app = document.getElementById('app')
  app.appendChild(header)
}

