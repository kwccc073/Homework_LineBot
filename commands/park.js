// 引入套件
import axios from 'axios'
import { distance } from '../utils/distance.js' // 計算經緯度的檔案
import template from '../templates/park.js' // LINE訊息模板
import fs from 'node:fs' // JS內建的套件

export default async event => {
  try {
    // JSON資料
    const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.json')
    const replies = data.data.park
      .map(d => {
        // 有經緯度才執行
        if (d.EntranceCoord && d.EntranceCoord.EntrancecoordInfo && d.EntranceCoord.EntrancecoordInfo[0].Ycod !== '0' && d.EntranceCoord.EntrancecoordInfo[0].Xcod !== '0') {
          d.distance = distance(
            // 停車場出入口的經緯度
            parseFloat(d.EntranceCoord.EntrancecoordInfo[0].Xcod),
            parseFloat(d.EntranceCoord.EntrancecoordInfo[0].Ycod),
            // 使用者傳送的位置
            event.message.latitude,
            event.message.longitude,
            // 使用者與停車場之間的距離
            'K')
        }
        return d
      })

      // 過濾出含有distance的停車場
      .filter(obj => obj.distance !== undefined)

      // 由近到遠排序
      .sort((a, b) => {
        return a.distance - b.distance
      })

      // 取最近的前五個停車場
      .slice(0, 5)

      // 套入LINE訊息模板
      .map(d => {
        const t = template()
        t.body.contents[0].text = d.name // 停車場名稱
        t.body.contents[1].contents[0].contents[1].text = d.area + d.address // 停車場地址
        t.body.contents[1].contents[1].contents[1].text = d.serviceTime // 開放時間
        t.body.contents[1].contents[2].contents[1].text = d.tel // 連絡電話
        t.body.contents[1].contents[3].contents[1].text = d.payex // 收費資訊
        t.footer.contents[0].action.uri = `https://www.google.com/maps/search/?api=1&query=${d.EntranceCoord.EntrancecoordInfo[0].Xcod},${d.EntranceCoord.EntrancecoordInfo[0].Ycod}` // 地圖網址
        return t
      })

    const result = await event.reply({
      type: 'flex',
      altText: '停車場查詢結果',
      contents: {
        type: 'carousel',
        contents: replies
      }
    })
    if (process.env.DEBUG === 'true') {
      console.log(result)

      // Debug用
      if (result.message) {
        fs.writeFileSync('./dump/twgod.json', JSON.stringify(replies, null, 2))
      }
    }
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
