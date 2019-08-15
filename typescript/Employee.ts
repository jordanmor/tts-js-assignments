class Employee {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  // zip codes can start with 0, so the value is a better choice as a string type
  zipCode: string;
  occupation: string;
  age: number;
  gender: string;
  hourlyWage: number;
  dateEmployed: Date;

  constructor(
    firstName: string, 
    lastName: string,
    phone: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    occupation: string,
    age: number,
    gender: string,
    hourlyWage: number,
    dateEmployed: Date
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;
    this.age = age;
    this.gender = gender;
    this.hourlyWage = hourlyWage;
    this.dateEmployed = dateEmployed;
  }

  public getFullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getFullAddress() : string {
    return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
  }

  public getPhone() : string {
    return this.phone;
  }

  public getAge() : number {
    return this.age;
  }

  public getWeeklyWage(hoursPerWeek: number = 40) : number {
    return hoursPerWeek * this.hourlyWage;
  }

  public getGender() : string {
    return this.gender;
  }

  public getOccupation() : string {
    return this.occupation;
  }

  public getDateEmployed(): string {
    return `${this.dateEmployed.getMonth()}-${this.dateEmployed.getDate()}-${this.dateEmployed.getFullYear()}`;
  }
}