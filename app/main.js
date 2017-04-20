/**
 * Created by xingbozhang on 17/4/19.
 */
import Router from './router.js'
export function createMain () {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')
  Router.init()
  Router.route('/link', function () {
    main.innerHTML = 'link'
  })
  Router.route('/', function () {
    main.innerHTML = 'main'
  })
  main.innerHTML = 'main'
  var app = document.getElementById('app')
  app.appendChild(main)
}

export default createMain
