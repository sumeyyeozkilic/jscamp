import User from "./user.js"

export default class Employee extends User{
    consturctor(salary){
        super()
        this.salary=salary
    }
}