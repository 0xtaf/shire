import { compare } from 'bcrypt';
import cookie from 'cookie';
import { sign } from 'jsonwebtoken';
const dbConnect = require('../../utils/dbConnect');
const User = require('../../Models/User');
dbConnect();
export default async function login(req, res) {
  return new Promise(async (resolve) => {
    const { username, password } = req.body;
    if (req.method === 'POST') {
      const userFound = await User.findOne({ username });
      if (userFound) {
        compare(password, userFound.password, function (err, result) {
          if (!err && result) {
            const claims = { sub: userFound._id, iss: 'TayfunSur' };
            const jwt = sign(claims, process.env.JWT_SECRET, {
              expiresIn: '1h',
            });

            res.setHeader(
              'Set-Cookie',
              cookie.serialize('auth', jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/',
              })
            );
            res.status(200).json({
              message: {
                msgBody:
                  "Successfully logged in. You'll be redirected to the main page.",
                msgError: false
              },
            });
            resolve();
          } else {
            res.status(400).json({
              message: {
                msgBody: 'Either password or username is wrong',
                msgError: true,
              },
            });
            resolve();
          }
        });
      } else {
        res.status(400).json({
          message: {
            msgBody: 'Either password or username is wrong',
            msgError: true,
          },
        });
        resolve();
      }
    } else {
      res.status(405).json({ message: 'I only support POST' });
    }
  });
}
