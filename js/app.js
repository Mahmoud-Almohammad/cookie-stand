'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm', '6pm', '7pm'];
let Seattle = {
  locationName: 'Seattle',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  avgCustomerPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  avgCookiesPerHour: function () {
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(this.avgCookiesPerCustomer * this.customersPerHour[i]);
      this.totalDailyCookies += this.cookiesPerHour[i];
    }
  },
};
console.log(Seattle.customersPerHour);
// let SeattleSales = document.getElementById('SeattleDiv');
// let SeattleList = document.createElement('ul');
// SeattleSales.appendChild(SeattleList);

// for(let i = 0; i < ; i++){
//     let SeattleItems = document.createElement('li');

//     SeattleList.appendChild(SeattleItems);
// }
// console.log(document);

 
let Tokyo = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour: [],
  avgCustomerPerHour: function () {
    for (let i = 0; i <= 13; i++) {
      let customersPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
      let cookiesPerHour = customersPerHour * Seattle.avgCookiesPerCustomer;
      return [cookiesPerHour, customersPerHour];
    }
  },
};

let Dubai = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour: [],
  avgCustomerPerHour: function () {
    for (let i = 0; i <= 13; i++) {
      let customersPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
      let cookiesPerHour = customersPerHour * Seattle.avgCookiesPerCustomer;
      return [cookiesPerHour, customersPerHour];
    }
  },
};

let Paris = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour: [],
  avgCustomerPerHour: function () {
    for (let i = 0; i <= 13; i++) {
      let customersPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
      let cookiesPerHour = customersPerHour * Seattle.avgCookiesPerCustomer;
      return [cookiesPerHour, customersPerHour];
    }
  },
};

let Lima = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour: [],
  avgCustomerPerHour: function () {
    for (let i = 0; i <= 13; i++) {
      let customersPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
      let cookiesPerHour = customersPerHour * Seattle.avgCookiesPerCustomer;
      return [cookiesPerHour, customersPerHour];
    }
  },
};

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
