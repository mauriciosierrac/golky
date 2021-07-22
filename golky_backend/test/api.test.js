const request = require('supertest')
const app = require('../src/app')

/**
 * test al end point
 */

describe('validacion del endpoint que recibe la cadena de texto', () => {
  it('valida si la cadena esta vacia', done => {
    const str = {
      text: ''
    }
    request(app)
      .get('/iecho')
      .send(str)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('{"error":"no text"}', done)
  })

  it('invierte la cadena recibida y muestra un flag informanfo que NO es un palindromo', done => {
    const str = {
      text: 'holamundo'
    }
    request(app)
      .get('/iecho')
      .send(str)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('{"text":"odnumaloh","palindromo":false}', done)
  })

  it('invierte la cadena recibida y muestra un flag informando que SI es un palindromo', done => {
    const str = {
      text: 'OSO'
    }
    request(app)
      .get('/iecho')
      .send(str)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('{"text":"OSO","palindromo":true}', done)
  })
})
