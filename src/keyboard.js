const kb = require ('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.bouqets],
    [kb.home.packaging, kb.home.content],
    [kb.home.cart],
	   [kb.home.bro]
  ],
  cart: [
    [kb.cart.clear],
    [kb.cart.order]
  ]
}
