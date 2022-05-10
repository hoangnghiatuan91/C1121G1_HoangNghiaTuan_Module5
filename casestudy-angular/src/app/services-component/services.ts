export interface Services {
  servicesId: number;
  servicesCode: string;
  servicesName: string;
  servicesArea: number;
  servicesCost: number;
  servicesMaxPeople: number;
  roomStandard?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  complimentaryIncludedService?: string;
}
