
import UserService from "./userService.js";

export default class CustomerService{
    constructor(){
        this.userService= new UserService()
    }

    getAll(){
        return this.userService.customers
    }

    getCustomerById(id){
        return this.userService.filter(u=>u.id==id)
    }

    getSortedCustomer(){
        return this.userService.customers.sort((customer1,customer2)=>{
            
            if (customer1.firstName>customer2.firstName) {
                return -1;
            }
            else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return 1;
            }
        })
    }


}