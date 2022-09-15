const router = require('express').Router()

const { newKey, publicKeySearch } = require('../controllers/auth')

router.post('/newKey', newKey)
router.post('/publicKeySearch', publicKeySearch)

module.exports = router