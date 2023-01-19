import { Application } from 'express';

import authLocal from './auth/local';
import user from './api/user';
import Appointment from './api/appointment';
import Doctors from './api/doctors';
import payment from './api/payment';
import upload from './api/Upload';
import healthcheck from './api/healthcheck';
import Products from './api/products';

function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/citas', Appointment);
  app.use('/api/doctors', Doctors);
  app.use('/auth/local', authLocal);
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/products', Products);

  app.use('/api/payment', payment)
  app.use('/api/upload', upload)



}

export default routes;