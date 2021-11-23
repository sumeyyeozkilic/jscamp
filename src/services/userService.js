import DataError from "../models/dataError.js"
import { users } from "../data/users.js"

export default class UserService {
    constructor(loggerService){
      this.employees= []
      this.customers= []
      this.errors= []
      this.loggerService=loggerService
    }

    checkCustomerValidity(user){
        let requiredFields = ["id", "firstName", "lastName", "age", "city"]
        let hasErrors= false;

        requiredFields.map(u=> !user[u] ? (hasErrors=true, this.errors.push(new DataError( `Validation problem ${u} is required`,user))): hasErrors=false)

        return hasErrors;
    }

    checkEmployeeValidityForErrors(user){

        let requiredFields = ["id", "firstName" ,"lastName" ,"age", "city","salary"]
        let hasErrors = false

        requiredFields.map(u=> !user[u] ? (hasErrors=true,this.errors.push(new DataError(`Validation problem ${u} is required`,user))) : hasErrors=false);

        return hasErrors;
    }

    load(){
        let customer = users.filter(c=> c.type == "customer");
        let employee = users.filter(e=> e.type == "employee");
        this.errors.push(new DataError("Wrong user type",...users.filter(e=>e.type!=="customer" && e.type!=="employee")));
        
        customer.map(c=> (this.checkCustomerValidity(c) && this.isNumberNan(c)) == false ? this.customers.push(c) : console.log("Verification failed"))
        employee.map(e=> (this.checkEmployeeValidityForErrors(e) || this.isNumberNan(e)) == false ? this.employees.push(e) : console.log("Verification failed"))
     }

     add(user){
        user.type === "customer" ? this.checkCustomerValidity(user) == false ? (this.customers.push(user), this.loggerService.log(user)) : null : null
        user.type === "employee" ? this.checkEmployeeValidityForErrors(user) == false ? (this.employees.push(user),this.loggerService.log(user)) : null : null
     }

     isNumberNan(user){
        let hasErrors = false

        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors=true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`,user))
        }

        return hasErrors;
     }
}
