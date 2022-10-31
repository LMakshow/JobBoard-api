export type JobDetailsRes = JobDetails[];

export interface JobDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: Benefit[];
  location: Location;
  pictures: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  employment_type: EmploymentType[];
}

export enum Benefit {
  FlexibleHours = 'Flexible hours',
  PayVocations = 'Pay vocations',
  Relocation = 'Relocation',
}

export enum EmploymentType {
  FullTime = 'Full time',
  PartTime = 'Part time',
  Temporary = 'Temporary',
}

export interface Location {
  lat: number;
  long: number;
}
