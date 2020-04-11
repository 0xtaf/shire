import dbConnect from '../../../utils/dbConnect';
import Post from '../../../Models/Post';

dbConnect();

export default async (req, res) => {
  //dikkat 11 nisan için not: slug eklicen bugün buraya. slug eklerken id'yi urlsonundan çekiceksin. 
  //şaşırma napcktım diye. ademden bak.
  const id = req.query.urlSonu;
  const method = req.method;
  
  console.log("aydi şudur ki", req.query)
  console.log("metod şudur ki", req.method)
  switch (method) {
    case 'GET':
      try {
        const post = await Post.findById(id);

        if (!post) {
          return res.status(400).json({ success: false, message:"post yok" });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
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
      try {
        const deletedPost = await Post.deleteOne({ _id: id });

        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data:{} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
