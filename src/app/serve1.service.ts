import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Roshum","id":69,"dept":"CSE"},
    {"name":"Rushina","id":169,"dept":"IT"},
    {"name":"Anshu","id":269,"dept":"ECE"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
