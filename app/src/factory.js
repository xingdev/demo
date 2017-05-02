/**
 * Created by xingbozhang on 17/5/2.
 */
//
//console.log(Object.prototype)  //=> {}
//console.log(Function.prototype)//=> [Function: Empty]
//console.log(String.prototype)  //=> [String: '']
//console.log(Number.prototype)  //=> [String: '']
//
//class Person {
//
//}
//var p = new Person
//function Animal () {
//  this.species = '动物'
//}
var cat = function (name, color) {
  this.name = name
  this.color = color
}
//Cat.prototype = new Animal()
//
//var cat1 = new Cat('大毛', '黄色')
//console.log(Cat.prototype) // 动物

class Animal {
  constructor () {
    this.species = '动物'
  }
}
class Person extends Animal {
  constructor () {
    super()
  }
}