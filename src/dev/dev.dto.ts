export class DevDto {
  readonly id: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly squad: string;
  readonly yearofservice: number;
  readonly role: string;
  readonly experience: number;
  readonly salary: number;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    squad: string,
    yearofservice: number,
    role: string,
    experience: number,
    salary: number,
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.squad = squad;
    this.yearofservice = yearofservice;
    this.role = role;
    this.experience = experience;
    this.salary = salary;
  }
}
