const express = require('express');
const newsRouter = express.Router();

const courseController = require('../app/controllers/CourseController');

newsRouter.get('/:slug', courseController.show);

module.exports = newsRouter;
