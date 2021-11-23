import UserService from "./userService.js";

export default class EmployeeService{
    constructor(){
        this.userService= new UserService
    }

    employeeList(){
      return this.userService.employees;
    }

    getEmployeeById(id){
        return this.userService.employees.find(u=>u.id == id)
    }
}