const dbConnect = require('../../utils/dbConnect');
const User = require('../../Models/User');

export default async function signup(req, res) {
  dbConnect();
  const { username, password } = req.body;
  if (req.method === 'POST') {
    try {
      const userFound = await User.findOne({ username });
      if (userFound) {
        res.status(400).json({
          message: { msgBody: 'Username is already taken', msgError: true },
        });
      } else {
        const userInput = {
          username: req.body.username,
          password: req.body.password,
        };
        const user = new User(userInput);
        await user.save();
        res.status(201).json({
          message: {
            msgBody: 'Account successfully created',
            msgError: false,
          },
        });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: { msgBody: 'Error has occured', msgError: true } });
    }
  } else {
    res.status(400).json({ message: 'I only support POST' });
  }
}
