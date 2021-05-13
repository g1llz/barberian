import './config/env';
import './database/connect';

import dotenv from 'dotenv';
import app from './server';

dotenv.config({
  path: '.env',
});

app.listen(process.env.PORT || 3000);
