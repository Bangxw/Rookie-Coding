const jwt = require('jsonwebtoken')

const payload = {
	name: 'basr',
	admin: true
}

const secret = '天王盖地虎'

const token = jwt.sign(payload, secret, { expiresIn: '1h'})
console.log(token)