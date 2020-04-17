import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/login', (req, res) => {
  res.send('Ok');
});

export default router;
