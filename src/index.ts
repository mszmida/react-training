import * as express from 'express';
import healthCheck from './middlewares/health-check.middleware';

const app: express.Express = express();

const LISTENING_PORT: number = 3000;

app.use(express.json());

app.get('/health-check', healthCheck);

app.listen(LISTENING_PORT, () => console.log(`Server is listening on port ${LISTENING_PORT}!`));
