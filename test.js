const Nightmare = require('nightmare')
const nightmare = Nightmare ({ show: true })
const assert = require('assert')

describe('UI Flow Tests of Retireryte', function() {
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })

//Opening website Retireryte on Browser.
  describe('Home Page', function() {
    describe('/ (Load Home Page)', () => {
      it('should load without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('https://access.retireryte.net/')
          .end()
          .then(function (result) { done() })
          .catch(done)
      })
    })
    
  })

//Verification of Login.
  describe('Login', function() {
    describe('/ (Login with correct credentials)', () => {
      it('should login without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('https://access.retireryte.net/')
        .type('#inputUsername', 'yogesh@mailinator.com')
		.type('#inputPassword', 'Yogesh@123')
		.click('#signin')
        .end()
        .then(function (result) { done() })
        .catch(done)
      })
    })
    
  })

//Singup as Advisor
  describe('Signup as Advisor', function () {
    describe('given all correct data', () => {
      it('should singup as Advisor', done => {
        nightmare.goto('https://access.retireryte.net/')
		.goto('https://access.retireryte.net/')
		.click('body > main > form > div:nth-child(6) > div > p > a')
		.click('body > main > form > div.form-group > a:nth-child(1)')
		.type('#first_name', 'Yogesh')
		.type('#last_name', 'Kumar')
		.type('#email', 'yogeshadvisor01@mailinator.com')
		.type('#password', 'yogesh@123')
		.click('body > main > form > div:nth-child(6) > div > label')
		.click('body > main > form > div:nth-child(7) > button')
        .end()
        .then(function (result) { done() })
        .catch(done)
      })
    })
  })

  //Singup as Investor
  describe('Signup as Investor', function () {
    describe('given all correct data', () => {
      it('should singup as Investor', done => {
        nightmare.goto('https://access.retireryte.net/')
		.click('body > main > form > div:nth-child(6) > div > p > a')
		.click('body > main > form > div.form-group > a:nth-child(2)')
		.type('#first_name', 'Yogesh')
		.type('#last_name', 'Kumar')
		.type('#email', 'yogeshinvestor01@mailinator.com')
		.type('#password', 'yogesh@123')
		.click('body > main > form > div:nth-child(5) > button')
        .end()
        .then(function (result) { done() })
        .catch(done)
      })
    })
  })

// Password Reset
  describe('Reset Password', function () {
    describe('Enter valid email id and send password Reset link', () => {
      it('should send password reset link', done => {
        nightmare
        .goto('https://access.retireryte.net/')
		.click('#reset')
		.type('#email', 'yogesh@mailinator.com')
		.click('body > main > form > div:nth-child(3) > button')        
        .end()
        .then(function (result) { done() })
        .catch(done)
      })
    })
  })
})