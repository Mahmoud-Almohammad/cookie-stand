'use strict';
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm'];
const allLocations = [];
function Locations (locationName,minCustomerPerHour,maxCustomerPerHour,avgCookiesPerCustomer){
  this.locationName = locationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  allLocations.push(this);
}

Locations.prototype.calculateCustomerPerHour = function(){
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
  }
};
Locations.prototype.calculateCookiesPerHour = function (){
  for(let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.avgCookiesPerCustomer * this.customersPerHour[i]));
  }
};
Locations.prototype.calculateTotalDailyCookies = function (){
  for(let i = 0; i<hours.length; i++){
    this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
  }
};

new Locations ('Seattle',23,65,6.3);
new Locations ('Tokyo',3,24,1.2);
new Locations ('Dubai',11,38,3.7);
new Locations ('Paris',20,38,2.3);
new Locations ('Lima',2,16,4.6);

function createobject(){
  for(let i = 0; i<allLocations.length; i++){
    allLocations[i].calculateCustomerPerHour();
    allLocations[i].calculateCookiesPerHour();
    allLocations[i].calculateTotalDailyCookies();
  }
}

createobject();

// create the table

let parentDiv = document.getElementById('container');
let locationsTable = document.createElement('table');
parentDiv.appendChild(locationsTable);

// create first row with it's content

function heading () {
  let headingRow = document.createElement('tr');
  locationsTable.appendChild(headingRow);

  let emptyCell = document.createElement('th');
  emptyCell.textContent = '';
  headingRow.appendChild(emptyCell);

  for (let i=0; i<hours.length; i++){
    let hoursHeading = document.createElement('th');
    hoursHeading.textContent = hours[i];
    headingRow.appendChild(hoursHeading);
  }

  let dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Daily Location Total';
  headingRow.appendChild(dailyLocationTotal);
}

heading();


// create the locations data

Locations.prototype.render = function (){
  let locationData = document.createElement('tr');
  locationsTable.appendChild(locationData);

  let branchName = document.createElement('td');
  branchName.textContent = this.locationName;
  locationData.appendChild(branchName);

  for(let i = 0; i < this.cookiesPerHour.length; i++){
    let locationCookiesPerHour = document.createElement('td');
    locationCookiesPerHour.textContent = this.cookiesPerHour[i];
    locationData.appendChild(locationCookiesPerHour);
  }

  let locationTotalDailyCookies = document.createElement('td');
  locationTotalDailyCookies.textContent = this.totalDailyCookies;
  locationData.appendChild(locationTotalDailyCookies);
};

function renderLocations(){
  for(let i = 0; i<allLocations.length; i++){
    allLocations[i].render();
  }
}

renderLocations();

// create user branch

let createNewBranch = document.getElementById('createNewBranch');
createNewBranch.addEventListener('submit', userBranch);

function userBranch (event){
  event.preventDefault();
  let userBranchName = event.target.userBranchName.value;
  let minimumCustomersPerHour = parseInt (event.target.minimumCustomersPerHour.value);
  let maximumCustomersPerHour = parseInt (event.target.maximumCustomersPerHour.value);
  let avgCookiesPerSale = parseInt (event.target.avgCookiesPerSale.value);

  let newBranch = new Locations(userBranchName,minimumCustomersPerHour,maximumCustomersPerHour,avgCookiesPerSale);

  locationsTable.removeChild(totalRow);

  newBranch.calculateCustomerPerHour();
  newBranch.calculateCookiesPerHour();
  newBranch.calculateTotalDailyCookies();
  newBranch.render();

  createTotalRow();
}

// create total row

let totalRow;
function createTotalRow (){
  totalRow = document.createElement('tr');
  locationsTable.appendChild(totalRow);

  let total = document.createElement('th');
  total.textContent = 'Totals';
  totalRow.appendChild(total);

  let totalOfTotals = 0;
  for (let i=0; i<hours.length; i++){
    let hourlyTotal = 0;
    for (let j = 0; j < allLocations.length; j++){
      hourlyTotal += allLocations[j].cookiesPerHour[i];
      totalOfTotals += allLocations[j].cookiesPerHour[i];
    }
    let tableHeader = document.createElement('th');
    tableHeader.textContent = hourlyTotal;
    totalRow.appendChild(tableHeader);
  }

  let cookiestotal = document.createElement('th');
  cookiestotal.textContent = totalOfTotals;
  totalRow.appendChild(cookiestotal);
}

createTotalRow();

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
