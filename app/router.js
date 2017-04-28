class Router {
  constructor () {
    this.routes = {}
    this.currentUrl = ''
  }

  init () {
    window.addEventListener('load', this.refresh.bind(this), false)
    window.addEventListener('hashchange', this.refresh.bind(this), false)
  }

  route (path, callback) {
    this.routes[path] = callback || function () {}
  }

  refresh () {
    this.currentUrl = location.hash.slice(1) || '/'
    if (this.routes[this.currentUrl]) {
      this.routes[this.currentUrl]()
    }
  }
}

var RouterInit = new Router()

RouterInit.init()

export default RouterInit


