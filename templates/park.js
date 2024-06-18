export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        // body.contents[0]
        {
          type: 'text',
          text: '府前廣場地下停車場',
          weight: 'bold',
          size: 'xl'
        },
        // body.contents[1]
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            // body.contents[1].contents[0]
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
              // body.contents[1].contents[0].contents[0]
                {
                  type: 'text',
                  text: '地址',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 2,
                  align: 'center'
                },
                // body.contents[1].contents[0].contents[1]
                {
                  type: 'text',
                  text: '信義區松壽路1號(地下共2層)',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            // body.contents[1].contents[1]
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                // body.contents[1].contents[1].contents[0]
                {
                  type: 'text',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 2,
                  text: '開放時間',
                  align: 'center'
                },
                // body.contents[1].contents[1].contents[1].text
                {
                  type: 'text',
                  text: '00:00:00~23:59:59',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            // body.contents[1].contents[2]
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                // body.contents[1].contents[2].contents[0]
                {
                  type: 'text',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 2,
                  text: '聯絡電話',
                  align: 'center'
                },
                // body.contents[1].contents[2].contents[1]
                {
                  type: 'text',
                  text: '02-26550818',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            // body.contents[1].contents[3]
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                // body.contents[1].contents[3].contents[0]
                {
                  type: 'text',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 2,
                  text: '收費資訊',
                  align: 'center'
                },
                // body.contents[1].contents[3].contents[1]
                {
                  type: 'text',
                  text: '小型車：計時 (09時~18時)30元/時，(18時~09時)10元/時，全程以半小時計;月租 全日4200元，夜間1000元(週一至週五19時~08時，週六、日及政府行政機關放假之紀念日、民俗節日之全日)。機車：機車收費10元/時，當日單次停車最高收費上限20元/日，隔日另計;機車月租300元/月',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        // footer.contents[0]
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '地圖',
            uri: 'https://line.me/'
          }
        }
      ],
      flex: 0
    }
  }
}
