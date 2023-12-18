import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
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
  links: [
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
  ],
  socialMedia: [
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
  ],
});

const User = mongoose.model('users', userSchema);
export default User;
