import axios from 'axios'
import { distance } from '../utils/distance.js' // 計算經緯度的檔案

const main = async () => {
  try {
    const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.json')
    // 只有137個停車場有經緯度

    const Y = 0 // 測試用
    const X = 0 // 測試用
    // console.log(d.EntranceCoord.EntrancecoordInfo[0]) //測試用

    const replies = data.data.park
      .map(d => {
        // 有經緯度才執行
        if (d.EntranceCoord && d.EntranceCoord.EntrancecoordInfo && d.EntranceCoord.EntrancecoordInfo[0].Ycod !== '0' && d.EntranceCoord.EntrancecoordInfo[0].Xcod !== '0') {
          d.distance = distance(
            // 停車場第一個出入口的經緯度
            parseFloat(d.EntranceCoord.EntrancecoordInfo[0].Ycod),
            parseFloat(d.EntranceCoord.EntrancecoordInfo[0].Xcod),
            // 使用者傳送的位置
            Y,
            X,
            // 使用者與停車場之間的距離
            'K')
        }
        return d
      })
    // 過濾出含有distance的park
      .filter(obj => obj.distance !== undefined)
    //   排序
      .sort((a, b) => {
        return a.distance - b.distance
      })
      // .slice(0, 5)

    // 測試
    // console.log(replies)
    // for (const i in replies) {
    //   console.log(`第${i}個為${replies[i].name}：經緯度－${replies[i].EntranceCoord.EntrancecoordInfo[0].Ycod}、${replies[i].EntranceCoord.EntrancecoordInfo[0].Xcod}，距離${replies[i].distance}`)
    // }
  } catch (error) {
    console.log(error)
  }
}

main()
