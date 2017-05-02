/**
 * Created by xingbozhang on 17/4/19.
 */

import chart from './src/tuto1'
import Animation from './src/tuto2'
import router from './router'
export function createMain () {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')
  router.route('/', () => {
    main.innerHTML = 'this is demo'
  })
  router.route('/link0', () => {
    chart()
  })
  router.route('/link1', () => {
    Animation()
  })

  return main
}
var main = createMain()

export default main
