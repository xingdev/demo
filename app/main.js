/**
 * Created by xingbozhang on 17/4/19.
 */
import Router from './router.js'
export function createMain () {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')
  Router.init()
  let i = -1
  debugger
  while (++i < 15) {
    Router.route('/link' + i, function () {
      main.innerHTML = 'link' + i
    })
  }
  var app = document.getElementById('app')
  app.appendChild(main)
}

export default createMain
