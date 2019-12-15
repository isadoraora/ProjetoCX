const express = require('express')
const request = require('request-promise-native')
const router = express.Router()

router.get('/', async function (req, res) {
    const result = await request.get('http://localhost:3002/pesquisa/notas')
    const media = JSON.parse(result)
    res.render('media', { media })
})

module.exports = router