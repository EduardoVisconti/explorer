const { Router } = require('express')

const router = Router()

router.post('/', router.create)

module.exports = router