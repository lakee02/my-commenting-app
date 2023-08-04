const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/create', commentController.createComment);
router.post('/:commentId/like', commentController.likeComment);
router.post('/:commentId/dislike', commentController.dislikeComment);

module.exports = router;
