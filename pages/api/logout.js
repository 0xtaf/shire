import cookie from 'cookie';
const dbConnect = require('../../utils/dbConnect');
const User = require('../../Models/User');
dbConnect();

export default async function logout(req, res) {
  
    if (req.method === 'GET') {
      res.clearCookie('auth');
      res.json({ user: { username: '' }, success: true });
    } else {
      res.status(405).json({ message: 'I only support POST' });
    }
  
}
