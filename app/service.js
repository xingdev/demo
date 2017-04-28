class Service {
  constructor () {
    this.services = {}
  }

  register (name, callback) {
    this.services[name] = callback
  }

  invokeService (name) {
    this.services[name] && this.services[name]()
  }

}

var service = new Service()

service.register('click', () => {
  console.log('hello')
})

service.invokeService('click')