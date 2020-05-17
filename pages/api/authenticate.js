import { verify } from 'jsonwebtoken';
import dbConnect from '../../utils/dbConnect';
dbConnect();

export const authenticated = (fn) => async (req, res) => {
  verify(req.cookies.auth, process.env.JWT_SECRET, async function (
    err,
    decoded
  ) {
    if (!err && decoded) {
      return await fn(req, res);
    } else {
      res
        .status(401)
        .json({
          message: {
            msgBody: 'Sorry you are not authenticated',
            msgError: true,
          },
        });
    }
  });
};

export default authenticated(async function (req, res) {
  res.status(200).json({ message: true });
});
