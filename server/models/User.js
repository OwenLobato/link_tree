import mongoose from 'mongoose';

const socialMediaSchema = new mongoose.Schema(
  {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    gitHub: {
      type: String,
    },
  },
  { _id: false }
);

const linksSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  },
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false,
  },
  category: {
    type: String,
    enum: ['Creator', 'Brand', 'Agency', 'Admin'],
    default: 'Creator',
    required: [true, 'Please provide a category'],
  },
  links: [linksSchema],
  socialMedia: [socialMediaSchema],
});

const User = mongoose.model('users', userSchema);
export default User;
