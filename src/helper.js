module.exports = {
	  contacts: `Бот №1 по поиску SMM исполнителей. 🔥
Рассказываем тренды рынка SMM (Instagram, VK, Facebook)
Занимаемся изучением SMM рынка в СНГ уже 2 год
Эксперт, основатель: @bodison
Свои предложения по поводу пишите на почту (с указанием Названия бота) telegramaxe@gmail.com`,
    bro: `Чтобы поделиться с друзьями ботом сейчас, отправьте им ссылку: https://t-do.ru/startuphelperbot \nСпасибо! 😱😏\n`,
	mac: `Акция!🔥\nДо 28 октября при заказе Рекламы, Контент и Упаковка бесплатно!\n`,
     bogdan: `Вы можете узнать подробнее у нашего эксперта - @bodison, либо через заявку в боте`,
  description: `Здравствуйте! Этот бот поможет Вам получить кардинальный результат в SMM.\n
Для Вашего удобства бот понимает следующие команды:
/start - начало работы
/help - список команд
--
Наши услуги:
/ads - Реклама 🔥
/packaging - Упаковка ☄️
/content - Контент 💥
--
/bro - Отправить другу
/contacts - Контакты, о нас.\n\n
Выберите пункт меню ⬆`,
  logStart() {
    console.log('Bot has been started...')
  },
  getChatId(msg) {
    return msg.chat.id
  }
}
