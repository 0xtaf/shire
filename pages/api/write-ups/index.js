import dbConnect from '../../../utils/dbConnect';
import Writeup from '../../../Models/Writeup';

dbConnect();

export default async (req, res) => {
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
