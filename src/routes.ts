import { Application } from 'express';

import user from './api/user';
// import Appointment from './api/appointment';
// import Doctors from './api/doctors';
import payment from './api/payment';
import upload from './api/Upload';

function routes(app: Application): void {
  app.use('/api/users', user);
  // app.use('/api/citas', Appointment);
  // app.use('/api/doctors', Doctors);
  app.use('/api/payment', payment)
  app.use('/api/upload', upload)

}

export default routes;