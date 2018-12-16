'use strict'

const anim = require('./main.js')

$(() => {
  $('#arrows').on('click', anim.scroll)
  $(document).ready(anim.typeWriter)
})
