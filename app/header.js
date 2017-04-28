function createHeader () {
  var header = document.createElement('div')
  header.setAttribute('id', 'header')
  var link = document.createElement('a')
  link.setAttribute('href', '/#/link')
  link.innerHTML = 'is link demo'
  header.innerHTML = 'demo'

  return header
}

var Header = createHeader()

export default Header

