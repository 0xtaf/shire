import dbConnect from '../../../utils/dbConnect';
import Writeup from '../../../Models/Writeup';
import Cors from 'cors';
// Initializing the cors middleware
const cors = Cors({
  origin: '*',
});
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
dbConnect();

export default async (req, res) => {
  await runMiddleware(req, res, cors);
  const title = req.query.urlSonu;
  const method = req.method;

  switch (method) {
    case 'GET':
      try {
        const writeup = await Writeup.findOne({ slug: title });

        if (!writeup) {
          return res.status(400).json({ success: false, message: 'no writeup' });
        }
        res.status(200).json({ success: true, data: writeup });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case 'PUT':
      try {
        const writeup = await Writeup.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        if (!writeup) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: writeup });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedWriteup = await Writeup.deleteOne({ _id: id });

        if (!deletedWriteup) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
