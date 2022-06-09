const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  birthday: { type: String, required: true },
  answers: [
    {
      type: Types.ObjectId,
      ref: 'Link',
    },
  ],
});

module.exports = model('User', schema);
