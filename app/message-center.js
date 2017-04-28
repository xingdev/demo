/**
 * Created by xingbozhang on 17/4/28.
 */
class MessageCenter {
  constructor () {
    this.messageCenter = {}
  }

  on (name, callback) {
    this.messageCenter[name] = callback
  }

  emit (name, args) {
    this.messageCenter[name] ? this.messageCenter[name](args) : console.log('消息不存在')
  }
}
var MessageCenterA = new MessageCenter()

//订阅通知，并不关心谁是发件人
MessageCenterA.on('click', (arg) => {
  arg('hello')
})
//发起通知
MessageCenterA.emit('click', (arg) => {
  console.log(arg)
})