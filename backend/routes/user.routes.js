const { Router } = require('express');
const User = require('../models/User');
const router = Router();

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
