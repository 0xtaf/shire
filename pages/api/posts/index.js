import dbConnect from '../../../utils/dbConnect';
import Post from '../../../Models/Post';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const postx = await Post.find({});
        res.status(200).json({ success: true, data: postx });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const post = await Post.create(req.body);

        res.status(201).json({ success: true, data: post });
        
      } catch (error) {
        res.status(400).json({ success: false, message: console.log(error) });
      }

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
