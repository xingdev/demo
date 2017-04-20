function Router () {
  this.routes = {}
  this.currentUrl = ''
}

Router.prototype.route = function (path, callback) {
  this.routes[path] = callback || function () {}
}

Router.prototype.refresh = function () {
  this.currentUrl = location.hash.slice(1) || '/'
  if (this.routes[this.currentUrl]) {
    this.routes[this.currentUrl]()
  }
}

Router.prototype.init = function () {
  window.addEventListener('load', this.refresh.bind(this), false)
  window.addEventListener('hashchange', this.refresh.bind(this), false)
}

var Router = new Router()

export default Router
