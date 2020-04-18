import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';

import Topic from '../topics/model';
import mdb from '../database/mdb';

const topicMdb = mdb(Topic);
const ncSchema = require('./schema');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/', (req, res) => {
  graphqlHTTP({
    schema: ncSchema,
    graphiql: true,
    context: { topicMdb },
  })(req, res);
});

export default router;
