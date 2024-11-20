const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

// Add a question
router.post('/', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all questions by category
router.get('/:categoryId', async (req, res) => {
  try {
    const questions = await Question.find({ categoryId: req.params.categoryId });
    res.send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
