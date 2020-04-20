import dbConnect from '../../../utils/dbConnect';
import Post from '../../../Models/Post';

dbConnect();

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
  const title = req.query.urlSonu;
  const method = req.method;

  switch (method) {
    case 'GET':
      res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
      try {
        const post = await Post.findOne({ slug: title });

        if (!post) {
          return res.status(400).json({ success: false, message: 'no post' });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case 'PUT':
      res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
      try {
        const post = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        if (!post) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
      try {
        const deletedPost = await Post.deleteOne({ _id: id });

        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Access-Control-Allow-Origin', 'https://www.tayfunsur.com');
      res.status(400).json({ success: false });
      break;
  }
};
