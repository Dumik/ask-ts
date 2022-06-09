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
      ref: 'Answer',
    },
  ],
  questions: [
    {
      type: Types.ObjectId,
      ref: 'Question',
    },
  ],
  likes: { type: Number, default: 0 },
  gifts: { type: Number, default: 0 },
  avatar: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
  },
  description: {
    type: String,
    default: 'Nothing about me...',
  },
  links: [
    {
      type: Types.ObjectId,
      ref: 'Link',
      default: 'Don`t follow me...',
    },
  ],
});

module.exports = model('User', schema);
