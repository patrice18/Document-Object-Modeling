//creating an object constructor

let Store = function (location, Average_Cookies_Per_Customer,Avg_Number_Of_Customers){
    this.location = location;
    this.Average_Cookies_Per_Customer = Average_Cookies_Per_Customer;
    this.Avg_Number_Of_Customers = Avg_Number_Of_Customers;
    this.Average_Cookies_Sold_Per_Hour = function () {
        return  this.Average_Cookies_Per_Customer * this.Avg_Number_Of_Customers;
    };
}

//creating an array to store the value of my new objects
let storeArray = []

//creating instances of the object above
let store1 = new Store( 'Bethesda', 2, 12);
let store2 = new Store('Rockville', 3, 22);
let store3 = new Store('Washington D.c', 4,8) 

storeArray.push(store1);
storeArray.push(store2);
storeArray.push(store3);

//using console.log to check myArray
console.log(storeArray);

//creating body element in sale.html and giving it an id, and an attribute
let elBody = document.getElementById ('creatingTable');
let elTable = document.createElement('table');

//attaching the firstChild of element'table' to table. That first child is table
elBody.appendChild(elTable);

//looping through the array of my object
for (var i=0; i<storeArray.length; i++){
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elTh = document.createElement('th');
    elRow.appendChild(elTh);
    elTh.innerText =storeArray[i].location;
    
}





/*
let cookieShop1 = { 
    location: 'Bethesda',
    Average_Cookies_Per_Customer:2,
    min_Number_Of_Customers : 2,
    max_Number_Of_Customers : 12,
    Random_Number_of_customers : function () {
        return Math.floor(Math.random () * (this.max_Number_Of_Customers - this.min_Number_Of_Customers +1 ) +  this.min_Number_Of_Customers)
    }, 
    Average_Cookies_Sold_Per_Hour: this.Random_Number_of_customers * this.Average_Cookies_Per_Customer,
};
//creating an object and giving it properties, methods
let cookieShop2 = { 
    location: 'Rockiville',
    Average_Cookies_Per_Customer:2,
    min_Number_Of_Customers : 4,
    max_Number_Of_Customers : 22,
    Avg_CookiesSale : function () {
        return Math.floor(Math.random () * (this.max_Number_Of_Customers - this.min_Number_Of_Customers +1 ) + this.min_Number_Of_Customers)
    }, 
    Average_Cookies_Sold_Per_Hour: this.Random_Number_of_customers * this.Average_Cookies_Per_Customer,

};

//creating an object and giving it properties, methods
let cookieShop3 = { 
    location: 'Washington DC',
    average_Cookies_Per_Customer:2,
    min_Number_Of_Customers : 6,
    max_Number_Of_Customers : 110,
    Avg_CookiesSale : function () {
        return Math.floor(Math.random () * (this.max_Number_Of_Customers - this.min_Number_Of_Customers +1 ) + this.min_Number_Of_Customers)
    }, 
    Average_Cookies_Sold_Per_Hour: this.Random_Number_of_customers * this.Average_Cookies_Per_Customer,
    
};

//storing the result for each location in an array
let cookie_Sale_Per_Store = [cookieShop1, cookieShop2, cookieShop3];
for (let i=0; i<cookie_Sale_Per_Store.length;i++) {


        let newBody = document.getElementById('sales-of-cookies');
        let newlocation = document.createElement('h2');
        newBody.appendChild(newlocation);
        newlocation.innerText = cookie_Sale_Per_Store[i].location;

       

        /*let newList = document.getElementById('ListOfProperties');
        console.log(newList);
        let newAverage = document.createElement('li');
        newList.appendChild(newAverage);

        newAverage.innerText = cookie_Sale_Per_Store[i].Average_Cookies_Per_Customer;
    }; */