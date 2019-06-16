
//moving my object constructor from previsous lab to this page as reference
let Store = function (location, Average_Cookies_Per_Customer,Avg_Number_Of_Customers){
    this.location = location;
    this.Average_Cookies_Per_Customer = Average_Cookies_Per_Customer;
    this.Avg_Number_Of_Customers = Avg_Number_Of_Customers;
    this.Average_Cookies_Sold_Per_Hour = function () {
        return  this.Average_Cookies_Per_Customer * this.Avg_Number_Of_Customers;
    };
}

//creating the element form
//selecting  the element node (form) I want the script to respond to. This variable is facilitating DOM access to the form.
let elStore = document.getElementById("stores");

// stating the input field my form needs and making their value equal to the different parameters/keys in my object constructor.
let userSelect = elStore.location1;
let userNumber = elStore.avg_cookies_per_cust;
let UserAvgofCustomer = elStore.avgOfCustomer;


//creating an array as placeholder to store the new objects that is create when user puts required values and fire the event "submit"
let storeArray = [];

//indicating which event on the form node will trigger the response
//stating the function I want to run when event "submit" is fired
elStore.addEventListener('submit', function(event) {
    event.preventDefault()
    
    //creating new instance of the Store Constructor
 let newStore = new Store(userSelect.value, userNumber.value, UserAvgofCustomer.value)  
storeArray.push(newStore)
addingRow();
avgCookies();
numberOfCustomers();
theTotal();
console.log(newStore);
console.log(storeArray);

});



//creating the table which will dynamically populate the user values entered in the form

let newBody= document.getElementById('body')
let elTable = document.createElement ('table')

//attaching the firstChild of element'table' to table. That first child is table
newBody.appendChild(elTable);

//looping through the array of my object
//for (var i=0; i<storeArray.length; i++){

    //creating table and attaching locations of stores as table row header
     function addingRow() {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elTh = document.createElement('th');
    elRow.appendChild(elTh);
    elTh.innerText =userSelect.value;

    
    //creating and appending a cell of the table (td) to element (tr) and dynamically populating this cell with one property from my objects stored in an array

    let elTd =document.createElement('td');
    elRow.appendChild(elTd);
    elTd.innerText = userNumber.value;

    //creating and appending a cell of the table (td) to element (tr) and dynamically populating this cell with one property from my objects stored in an array

    let elTd2 =document.createElement('td');
    elRow.appendChild(elTd2);
    elTd2.innerText = UserAvgofCustomer.value;
     }
    
     //creating footer at the bottom that tables all the rows 
     // First- creating function to capture avergage cookies per customer

function avgCookies () {
    let avaregeCookies = 0;
    for (let i=0; i<storeArray.length; i++){
        avaregeCookies += parseInt(storeArray[i].Average_Cookies_Per_Customer);
        console.log(avaregeCookies);
        console.log(storeArray[i].Average_Cookies_Per_Customer)
    };
    return avaregeCookies;
    
};
     
//create function to capture number of customers
function numberOfCustomers () {
    let numberOfCustom = 0;
    for (let j=0;j<storeArray.length;j++){
        numberOfCustom += parseInt(storeArray[j].Avg_Number_Of_Customers);
        console.log(numberOfCustom);
        console.log(storeArray[j].Avg_Number_Of_Customers)
    }
    return numberOfCustom;
};

//Creating a new row to store total
function theTotal(){
let total = document.createElement('th')
elTd2.appendChild(total)

total.innerText= numberOfCustomers();
}

