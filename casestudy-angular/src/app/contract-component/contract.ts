import {Employee} from './employee';
import {Customer} from './customer';
import {Service} from './service';

export interface Contract {
  contractId: number;
  contractCode: string;
  startDate: string;
  endDate: string;
  contractDeposit: number;
  total: number;
  employee: Employee;
  customer: Customer;
  service: Service;
}
