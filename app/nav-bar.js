export function createNavBar () {
  var navBar = document.createElement('div')
  navBar.setAttribute('id', 'navBar')
  var ul = document.createElement('ul')

  let i = -1
  while (++i < 15) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.setAttribute('href', '/#/link' + i)
    a.innerHTML = 'link' + i
    li.appendChild(a)
    ul.appendChild(li)
  }
  navBar.appendChild(ul)
  var app = document.getElementById('app')
  app.appendChild(navBar)
}

export default createNavBar