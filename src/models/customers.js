import User from "./user.js";

export default class Customers extends User{
      constructor(creditCardNumber){
          super()
          this.creditCardNumber=creditCardNumber;
      }
}