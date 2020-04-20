import dbConnect from '../../../utils/dbConnect';
import Writeup from '../../../Models/Writeup';

dbConnect();

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
  const { method } = req;

  switch (method) {
    case 'GET':
      res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
      try {
        const writeup = await Writeup.find({});
        res.status(200).json({ success: true, data: writeup });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
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
