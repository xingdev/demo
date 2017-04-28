/**
 * Created by xingbozhang on 17/4/19.
 */

import chart from './src/tuto1'
import router from './router'
export function createMain () {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')

  var app = document.getElementById('app')
  app.appendChild(main)
  router.route('/', () => {
    main.innerHTML = 'this is demo'
  })
  router.route('/link0', () => {
    chart()
  })
}

export default createMain
