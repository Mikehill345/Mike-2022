const router = require('express').Router()

const { newKey, publicKeySearch, findSignature } = require('../controllers/client')

router.post('/newKey', newKey)
router.post('/publicKeySearch', publicKeySearch)
router.post('/findSignature', findSignature)

module.exports = router