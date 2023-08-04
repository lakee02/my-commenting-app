const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { text, userId, parentId } = req.body;

    // Create the comment
    const newComment = new Comment({
      text,
      userId,
      parentId,
    });

    await newComment.save();
    res.status(201).json({ message: 'Comment created successfully', comment: newComment });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.likeComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    // Find the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    
    comment.likes += 1;
    await comment.save();

    res.status(200).json({ message: 'Comment liked successfully', comment });
  } catch (error) {
    console.error('Error liking comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.dislikeComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    // Find the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    
    comment.dislikes += 1;
    await comment.save();

    res.status(200).json({ message: 'Comment disliked successfully', comment });
  } catch (error) {
    console.error('Error disliking comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
