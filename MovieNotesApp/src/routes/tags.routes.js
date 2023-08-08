const { Router } = require('express')

const TagsController = require('../controllers/TagsController.js')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', tagsController.index)

module.exports = tagsRoutes
