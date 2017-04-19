/**
 * Created by xingbozhang on 17/4/19.
 */
export function createMain () {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')
  main.innerHTML = 'main'
  var app = document.getElementById('app')
  app.appendChild(main)
}

export default createMain
