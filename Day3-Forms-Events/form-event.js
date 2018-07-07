
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
let elStore = document.getElementById("stores");

// stating the input field my form needs and making their value equal to the different parameters/keys in my object constructor.
let userSelect = elStore.location1;
let userNumber = elStore.avg_cookies_per_cust;
let UserAvgofCustomer = elStore.avgOfCustomer;


//creating an array as placeholder to store the new objects that is create when user puts required values and fire the event "subscribe"
let storeArray = [];

//indicating which event on the form node will trigger the response
//stating the function I want to run when event "submit" is fired
elStore.addEventListener('submit', function(event) {
    event.preventDefault()
    
    //creating new instance of the Store Constructor
 let newStore = new Store(userSelect.value, userNumber.value, UserAvgofCustomer.value)  
storeArray.push(newStore)
console.log(newStore);
console.log(storeArray);

});


