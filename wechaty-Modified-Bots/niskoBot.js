const { Wechaty } = require('wechaty')

const niskoBot = new Wechaty()

niskoBot.on('scan',    onScan)
niskoBot.on('login',   onLogin)
niskoBot.on('logout',  onLogout)
niskoBot.on('message', onMessage)


niskoBot.start()
.then(() => console.log('Starter Nisko Bot Started.'))
.catch(e => console.error(e))



function onScan (qrcode, status) {
  require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console

  const qrcodeImageUrl = [
    'https://api.qrserver.com/v1/create-qr-code/?data=',
    encodeURIComponent(qrcode),
  ].join('')

  console.log(qrcodeImageUrl)
}

function onLogin (user) {
  console.log(`${user} login`)
}

function onLogout(user) {
  console.log(`${user} logout`)
}

async function onMessage (msg) {
  console.log(msg.toString())
}
