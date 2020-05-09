import dbConnect from '../../../server/utils/dbConnect';
import Writeup from '../../../server/Models/Writeup';
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
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const writeup = await Writeup.find({});
        res.status(200).json({ success: true, data: writeup });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const writeup = await Writeup.create(req.body);

        res.status(201).json({ success: true, data: writeup });
      } catch (error) {
        res.status(400).json({ success: false, message: console.log(error) });
      }

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
