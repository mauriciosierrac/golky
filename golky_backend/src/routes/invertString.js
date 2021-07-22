const { Router } = require('express')
const router = Router()

/**
 * enrutamiento:
 * donde se captura el texto que viene en el body
 * si su largo es 0, se envia mensaje de error por cadena vacia
 * si la cadena es mayor a 0, se crea un array con los caracteres separados por comillas con split
 * se invierte el array con reverse
 * se unen los elementos de un array separados por comillas en una sola string con join
 * valida si la cadena inversa es igual a la cadena orinal
 */

router.get('/iecho', (req, res) => {
  const str = req.body.text
  if (str.length === 0) {
    return res.json({
      error: 'no text'
    })
  } else {
    const inverStr = str.split('').reverse().join('')
    let palin
    inverStr === str ? palin = true : palin = false
    return res.json({
      text: inverStr,
      palindromo: palin
    })
  }
})

module.exports = router
