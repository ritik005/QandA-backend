const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { getQues, postQues } = require('../../controllers/quesController.js');

router.get('/', auth, getQues);
router.post('/', auth, postQues);

module.exports = router;