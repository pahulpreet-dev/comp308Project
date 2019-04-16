import { Health } from './health';

export class Patient {
  firstName: string;
  lastName: string;
  patientId: string;
  password: string;
  hospital: string;
  city: string;
  phone: number;
  health: Health;
}
