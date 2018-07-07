
//moving my object constructor from previsous lab to this page as reference
let Store = function (location, Average_Cookies_Per_Customer,Avg_Number_Of_Customers){
    this.location = location;
    this.Average_Cookies_Per_Customer = Average_Cookies_Per_Customer;
    this.Avg_Number_Of_Customers = Avg_Number_Of_Customers;
    this.Average_Cookies_Sold_Per_Hour = function () {
        return  this.Average_Cookies_Per_Customer * this.Avg_Number_Of_Customers;
    };
}

//selecting  the element node I want the script to respond to. This variable is facilitating DOM access to the form.
elStore = document.getElementByID("stores");

// stating the input field my form needs and making their value equal to the different parameters/keys in my object constructor.
let userSelect = Store.location;
let userNumber = Store.Average_Cookies_Per_Customer;
let UserAvgofCustomer = Store.Avg_Number_Of_Customers;



//indicating which event on the form node will trigger the respo

//stating the function I want to run when the event (...) happended
