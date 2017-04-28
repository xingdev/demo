function createNavBar () {
  var navBar = document.createElement('div')
  navBar.setAttribute('id', 'navBar')
  var ul = document.createElement('ul')

  var i = -1

  var textArr = ['首页', '产品', '关于']

  while (++i < 3) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.setAttribute('href', '/#/link' + i)
    a.innerHTML = textArr[i]
    li.appendChild(a)
    ul.appendChild(li)
  }
  navBar.appendChild(ul)

  return navBar
}

var navBar = createNavBar()
export default navBar