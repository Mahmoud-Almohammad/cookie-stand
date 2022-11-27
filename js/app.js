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
  result: [],
  calculateCustomerPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  calculateCookiesPerHour: function () {
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookiesPerCustomer * this.customersPerHour[i]));
      this.totalDailyCookies += this.cookiesPerHour[i];
    }
  },
  calculateTotalDailyCookies (){
    for(let i = 0; i<hours.length; i++){
      this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
    }
  },
  finalResult (){
    for(let i = 0; i< hours.length; i++){
      this.result.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    }
    this.result.push('Total: ' + this.totalDailyCookies + ' cookies');
  },
};
Seattle.calculateCustomerPerHour();
Seattle.calculateCookiesPerHour();
Seattle.finalResult();

let seattleDiv = document.getElementById('seattleDiv');
let seattleArticle = document.createElement('article');
seattleDiv.appendChild(seattleArticle);

let seattleName = document.createElement('h2');
seattleName.textContent = Seattle.locationName;
seattleArticle.appendChild(seattleName);

let seattleList = document.createElement('ul');
seattleArticle.appendChild(seattleList);

for(let i = 0; i < Seattle.result.length ; i++){
  let SeattleItems = document.createElement('li');
  SeattleItems.textContent = Seattle.result[i];
  seattleList.appendChild(SeattleItems);
}

 
let Tokyo = {
  locationName: 'Tokyo',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  result: [],
  calculateCustomerPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  calculateCookiesPerHour: function () {
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookiesPerCustomer * this.customersPerHour[i]));
      this.totalDailyCookies += this.cookiesPerHour[i];
    }
  },
  calculateTotalDailyCookies (){
    for(let i = 0; i<hours.length; i++){
      this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
    }
  },
  finalResult (){
    for(let i = 0; i< hours.length; i++){
      this.result.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    }
    this.result.push('Total: ' + this.totalDailyCookies + ' cookies');
  },
};
Tokyo.calculateCustomerPerHour();
Tokyo.calculateCookiesPerHour();
Tokyo.finalResult();

let tokyoDiv = document.getElementById('tokyoDiv');
let tokyoArticle = document.createElement('article');
tokyoDiv.appendChild(tokyoArticle);

let tokyoName = document.createElement('h2');
tokyoName.textContent = Tokyo.locationName;
tokyoArticle.appendChild(tokyoName);

let tokyoList = document.createElement('ul');
tokyoArticle.appendChild(tokyoList);

for(let i = 0; i < Tokyo.result.length ; i++){
  let tokyoItems = document.createElement('li');
  tokyoItems.textContent = Tokyo.result[i];
  tokyoList.appendChild(tokyoItems);
}

let Dubai = {
  locationName: 'Dubai',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  result: [],
  calculateCustomerPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  calculateCookiesPerHour: function () {
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookiesPerCustomer * this.customersPerHour[i]));
      this.totalDailyCookies += this.cookiesPerHour[i];
    }
  },
  calculateTotalDailyCookies (){
    for(let i = 0; i<hours.length; i++){
      this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
    }
  },
  finalResult (){
    for(let i = 0; i< hours.length; i++){
      this.result.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    }
    this.result.push('Total: ' + this.totalDailyCookies + ' cookies');
  },
};
Dubai.calculateCustomerPerHour();
Dubai.calculateCookiesPerHour();
Dubai.finalResult();

let dubaiDiv = document.getElementById('dubaiDiv');
let dubaiArticle = document.createElement('article');
dubaiDiv.appendChild(dubaiArticle);

let dubaiName = document.createElement('h2');
dubaiName.textContent = Dubai.locationName;
dubaiArticle.appendChild(dubaiName);

let dubaiList = document.createElement('ul');
dubaiArticle.appendChild(dubaiList);

for(let i = 0; i < Dubai.result.length ; i++){
  let dubaiItems = document.createElement('li');
  dubaiItems.textContent = Dubai.result[i];
  dubaiList.appendChild(dubaiItems);
}

let Paris = {
  locationName: 'Paris',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  result: [],
  calculateCustomerPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  calculateCookiesPerHour: function () {
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookiesPerCustomer * this.customersPerHour[i]));
      this.totalDailyCookies += this.cookiesPerHour[i];
    }
  },
  calculateTotalDailyCookies (){
    for(let i = 0; i<hours.length; i++){
      this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
    }
  },
  finalResult (){
    for(let i = 0; i< hours.length; i++){
      this.result.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    }
    this.result.push('Total: ' + this.totalDailyCookies + ' cookies');
  },
};
Paris.calculateCustomerPerHour();
Paris.calculateCookiesPerHour();
Paris.finalResult();

let parisDiv = document.getElementById('parisDiv');
let parisArticle = document.createElement('article');
parisDiv.appendChild(parisArticle);

let parisName = document.createElement('h2');
parisName.textContent = Paris.locationName;
parisArticle.appendChild(parisName);

let parisList = document.createElement('ul');
parisArticle.appendChild(parisList);

for(let i = 0; i < Paris.result.length ; i++){
  let parisItems = document.createElement('li');
  parisItems.textContent = Paris.result[i];
  parisList.appendChild(parisItems);
}

let Lima = {
  locationName: 'Lima',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  result: [],
  calculateCustomerPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  calculateCookiesPerHour: function () {
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookiesPerCustomer * this.customersPerHour[i]));
      this.totalDailyCookies += this.cookiesPerHour[i];
    }
  },
  calculateTotalDailyCookies (){
    for(let i = 0; i<hours.length; i++){
      this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
    }
  },
  finalResult (){
    for(let i = 0; i< hours.length; i++){
      this.result.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    }
    this.result.push('Total: ' + this.totalDailyCookies + ' cookies');
  },
};
Lima.calculateCustomerPerHour();
Lima.calculateCookiesPerHour();
Lima.finalResult();

let limaDiv = document.getElementById('limaDiv');
let limaArticle = document.createElement('article');
limaDiv.appendChild(limaArticle);

let limaName = document.createElement('h2');
limaName.textContent = Lima.locationName;
limaArticle.appendChild(limaName);

let limaList = document.createElement('ul');
limaArticle.appendChild(limaList);

for(let i = 0; i < Lima.result.length ; i++){
  let limaItems = document.createElement('li');
  limaItems.textContent = Lima.result[i];
  limaList.appendChild(limaItems);
}

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
