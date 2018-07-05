//creating an object and giving it properties, methods

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

        newAverage.innerText = cookie_Sale_Per_Store[i].Average_Cookies_Per_Customer;*/
    };