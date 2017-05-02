/**
 * Created by xingbozhang on 17/5/2.
 */
function add (x, y) {
  return x + y
}
add(1, 2) // 3

function addX (y) {
  return function (x) {
    return x + y
  }
}

addX(2)(1)

function getWebpack (config) {
  return function (webpackConfig) {
    return config + webpackConfig
  }
}

var a = getWebpack('config')('webpackConfig')


var Class = function (a) {
  this.a = a
  this.add = function () {
    this.a++
  }
}

var ins = new Class(1)
ins.add()
console.log(ins.a) //2