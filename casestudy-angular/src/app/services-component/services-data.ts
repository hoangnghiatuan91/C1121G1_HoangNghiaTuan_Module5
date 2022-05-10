import {Services} from './services';

export class ServicesData {
  public static servicesList: Services[] = [{
    servicesId: 1,
    servicesCode: 'DV-0001',
    servicesName: 'Villa Beach Front',
    servicesArea: 250,
    servicesCost: 10000000,
    servicesMaxPeople: 10,
    roomStandard: 'vip',
    descriptionOtherConvenience: 'Có hồ bơi',
    poolArea: 200,
    numberOfFloors: 4,
    complimentaryIncludedService: ''
  },
    {
      servicesId: 2,
      servicesCode: 'DV-0002',
      servicesName: 'House Princess 01',
      servicesArea: 140,
      servicesCost: 5000000,
      servicesMaxPeople: 7,
      roomStandard: 'vip',
      descriptionOtherConvenience: 'Có bếp nướng',
      poolArea: null,
      numberOfFloors: 3,
      complimentaryIncludedService: ''
}

]; }
