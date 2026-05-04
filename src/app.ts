import express from 'express';
import type { Application } from 'express';
import { router } from './routes/routes.js';

export const app: Application = express();


app.use(router);