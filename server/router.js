const express = require('express');
const router = express.Router();
const commentController= require('./controllers/commentcontroller');

router.get('/',commentController.getComments);

module.exports = router;