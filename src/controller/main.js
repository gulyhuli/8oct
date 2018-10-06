const bot = require('../index')
const helper = require('../helper')
const kb = require ('../keyboard-buttons')
const rub = require('../globals').rub

module.exports = {
  sendCallback (msg, item) {
    const id = helper.getChatId(msg)
    let text, keyboard

    switch (item) {
      case 'ads':
          text = `Реклама - двигатель любого проекта.\nНаша команда хорошо умеет:\n1.Запускать рекламу\n2.Приводить лидов(заявки)\n3.Оптимизировать рекламные кабинеты\n\n\n Работаем в соц.сетях:\n1.Instagram\n2.ВКонтакте\n3.Facebook\nВсе расценки на наши услуги индивидуальны. Вы можете узнать подробнее у @bodison, либо через заявку в боте. `
        keyboard = {
          inline_keyboard: [
            [{text: `🔍 Смотреть все`, callback_data: 'с_all'}]
          ]
        }
        
        break
      case 'packaging':
        text = `Хотите заказать ${item === 'packaging' ? 'упаковку' : 'рекламу'}?\nВы можете выбрать повод, на который Вы желаете ${item === 'packaging' ? 'её' : 'его'} подарить , отсортировать ${item === 'packaging' ? 'композиции' : 'букеты'} по стоимости, или посмотреть весь ассортимент`
        keyboard = {
          inline_keyboard: [
            [{text: `🔍 Смотреть все`, callback_data: item === 'packaging' ? 'c_all' : 'b_all'}]
          ]
        }
        break
      case 'content':
        text = `Хотите заказать подарок?\nВы можете уточнить желаемую стоимость, или посмотреть все подарки`
        keyboard = {
          inline_keyboard: [
            [{text: `🔍 Смотреть все`, callback_data: 'g_all'}]
          ]
        }
        break
    }

    return bot.sendMessage(id, text, { reply_markup: keyboard })
  },
  showReasons (id, query) {
    let item, keyboard
    item = query === 'bouquet' ? 'b' : 'c'
    keyboard = [
      [
        {text: kb.reasons.birthday, callback_data: `${item}_birthday`},
        {text: kb.reasons.jubilee, callback_data: `${item}_jubilee`}
      ],
      [
        {text: kb.reasons.wedding, callback_data: `${item}_wedding`},
        {text: kb.reasons.love, callback_data: `${item}_love`}

      ]
    ]

   (id, `Выберите повод, на который хотите подарить ${item === 'b' ? 'букет' : 'композицию'}:`, {
      reply_markup: { inline_keyboard: keyboard }
    })
},
  choosePrice (msg) {
    let item = msg.data.substr(0,1)
    return bot.sendMessage(msg.message.chat.id, `Пожалуйста, уточните стоимость`, {
      reply_markup: {
        inline_keyboard: [
          [{text: `до 2000 ${rub}`, callback_data: `${item}_low`}],
          [{text: `от 2000 ${rub} до 3500 ${rub}`, callback_data: `${item}_midlow`}],
          [{text: `от 3500 ${rub} до 5000 ${rub}`, callback_data: `${item}_midhigh`}],
          [{text: `от 5000 ${rub}`, callback_data: `${item}_high`}]
        ]
      }
    })
  },
  choosePriceForAll (msg) {
    return bot.sendMessage(msg.from.id, `Пожалуйста, уточните желаемую стоимость букета или композиции`, {
      reply_markup: {
        inline_keyboard: [
          [{text: `до 2000 ${rub}`, callback_data: `all_low`}],
          [{text: `от 2000 ${rub} до 3500 ${rub}`, callback_data: `all_midlow`}],
          [{text: `от 3500 ${rub} до 5000 ${rub}`, callback_data: `all_midhigh`}],
          [{text: `от 5000 ${rub}`, callback_data: `all_high`}]
        ]
      }
    })
  }
}
