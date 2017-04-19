import _ from 'lodash'
export function createNavBar () {
  var navBar = document.createElement('div')
  navBar.setAttribute('id', 'navBar')
  navBar.innerHTML = _.join(['bar221212'], '')
  var ul = document.createElement('ul')
  var list = []
  let i = -1
  while (++i < 20) {

  }
  var app = document.getElementById('app')
  app.appendChild(navBar)
}

export default createNavBar