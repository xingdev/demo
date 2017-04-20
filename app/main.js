/**
 * Created by xingbozhang on 17/4/19.
 */
export function createMain (text) {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')
  main.innerHTML = text || 'hello'
  var app = document.getElementById('app')
  app.appendChild(main)
}

export default createMain
