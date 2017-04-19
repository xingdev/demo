import _ from 'lodash'
export function createHeader () {
  var header = document.createElement('div')
  header.setAttribute('id', 'header')
  header.innerHTML = _.join(['webpack', 'demo'], '')
  var app = document.getElementById('app')
  app.appendChild(header)
}

