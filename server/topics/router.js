import express from 'express';
import bodyParser from 'body-parser';
import { getAll, create, remove } from './controller';
import Topic from './model';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', getAll(Topic));
router.post('/', create(Topic));
router.delete('/', remove(Topic));

export default router;
