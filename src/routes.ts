import user from './api/user';
import Appointment from './api/appointment';
import Doctors from './api/doctors';

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/citas', Appointment);
  app.use('/api/doctors', Doctors);

}

export default routes;