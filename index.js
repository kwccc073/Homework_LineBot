// 引入套件
import 'dotenv/config'
import linebot from 'linebot'
// 引入commands裡的檔案，
import commandPark from './commands/park.js'

// 設定機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當機器人收到訊息時，執行{}內的程式碼
bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }
  if (event.message.type === 'location') {
    commandPark(event)
  }
})

bot.on('postback', event => {
  console.log(event)
  event.reply('aaa')
})
// 設定機器人監聽 port
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
