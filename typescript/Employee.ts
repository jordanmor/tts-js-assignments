interface EmployeeOptions {
  employeeId: number;
  firstName: string;
  lastName: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  occupation?: string;
  age?: number;
  gender: string;
  hourlyWage?: number;
  dateEmployed: Date;
  certifications?: string[];
}

class Employee {
  private employeeId: number;
  private firstName: string;
  private lastName: string;
  private phone: string;
  private street: string;
  private city: string;
  private state: string;
  private zipCode: string;
  private occupation: string;
  private age: number;
  private gender: string;
  private hourlyWage: number;
  private dateEmployed: Date;
  private certifications: string[];

  constructor(
    employeeId: number,
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
    dateEmployed: Date,
    certifications: string[] = []
    ) {
    this.employeeId = employeeId;
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
    this.certifications = certifications;
  }

  public static buildEmployeeWithOptions(option: EmployeeOptions) : Employee {
    return new Employee(
      option.employeeId,
      option.firstName,
      option.lastName,
      option.phone,
      option.street,
      option.city,
      option.state,
      option.zipCode,
      option.occupation,
      option.age,
      option.gender,
      option.hourlyWage,
      option.dateEmployed,
      option.certifications
    );
  }

  public getEmployeeId() : number {
    return this.employeeId;
  }

  public getFullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getFullAddress() : string {
    if(this.street && this.city && this.state && this.zipCode) {
      return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
    }
    return;
  }

  public getPhone() : string {
    return this.phone;
  }

  public getAge() : number {
    return this.age;
  }

  public getGender() : string {
    return this.gender;
  }

  public getWeeklyWage(hoursPerWeek: number = 40) : number {
    return hoursPerWeek * this.hourlyWage;
  }

  public getOccupation() : string {
    return this.occupation;
  }

  public getDateEmployed(): string {
    return `${this.dateEmployed.getMonth()}-${this.dateEmployed.getDate()}-${this.dateEmployed.getFullYear()}`;
  }

  public getCertifications(): string[] {
    return this.certifications;
  }

  public addCerts(...certs: string[]): void {
    for(let cert of certs) {
      this.certifications.push(cert);
    }
  }
}