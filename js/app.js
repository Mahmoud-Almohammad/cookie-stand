'use strict';
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm'];
function Locations (locationName,minCustomerPerHour,maxCustomerPerHour,avgCookiesPerCustomer){
  this.locationName = locationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
}
Locations.prototype.calculateCustomerPerHour = function(){
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(random (this.minCustomerPerHour, this.maxCustomerPerHour));
  }
};
Locations.prototype.calculateCookiesPerHour = function (){
  for(let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.avgCookiesPerCustomer * this.customersPerHour[i]));
    this.totalDailyCookies += this.cookiesPerHour[i];
  }
};
Locations.prototype.calculateTotalDailyCookies = function (){
  for(let i = 0; i<hours.length; i++){
    this.totalDailyCookies = this.totalDailyCookies + this.cookiesPerHour[i];
  }
};
let seattle = new Locations ('Seattle',23,65,6.3);
seattle.calculateCustomerPerHour();
seattle.calculateCookiesPerHour();
seattle.calculateTotalDailyCookies();
console.log(seattle);

let tokyo = new Locations ('Tokyo',3,24,1.2);
tokyo.calculateCustomerPerHour();
tokyo.calculateCookiesPerHour();
tokyo.calculateTotalDailyCookies();
console.log(tokyo);

let dubai = new Locations ('Dubai',11,38,3.7);
dubai.calculateCustomerPerHour();
dubai.calculateCookiesPerHour();
dubai.calculateTotalDailyCookies();
console.log(dubai);

let paris = new Locations ('Paris',20,38,2.3);
paris.calculateCustomerPerHour();
paris.calculateCookiesPerHour();
paris.calculateTotalDailyCookies();
console.log(paris);

let lima = new Locations ('Lima',2,16,4.6);
lima.calculateCustomerPerHour();
lima.calculateCookiesPerHour();
lima.calculateTotalDailyCookies();
console.log(lima);

let parentDiv = document.getElementById('container');
let lacationsTable = document.createElement('table');
parentDiv.appendChild(lacationsTable);

// create first row with it's content

let headingRow = document.createElement('tr');
lacationsTable.appendChild(headingRow);

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

// create seattle row

let renderSeattle = document.createElement('tr');
lacationsTable.appendChild(renderSeattle);

let seattleName = document.createElement('td');
seattleName.textContent = seattle.locationName;
renderSeattle.appendChild(seattleName);

for(let i=0; i<hours.length; i++){
  let seattleCookiesPerHour = document.createElement('td');
  seattleCookiesPerHour.textContent = seattle.cookiesPerHour[i];
  renderSeattle.appendChild(seattleCookiesPerHour);
}

let seattleTotalDailyCookies = document.createElement('td');
seattleTotalDailyCookies.textContent = seattle.totalDailyCookies;
renderSeattle.appendChild(seattleTotalDailyCookies);

// create tokyo row

let renderTokyo = document.createElement('tr');
lacationsTable.appendChild(renderTokyo);

let tokyoName = document.createElement('td');
tokyoName.textContent = tokyo.locationName;
renderTokyo.appendChild(tokyoName);

for(let i=0; i<hours.length; i++){
  let tokyoCookiesPerHour = document.createElement('td');
  tokyoCookiesPerHour.textContent = tokyo.cookiesPerHour[i];
  renderTokyo.appendChild(tokyoCookiesPerHour);
}

let tokyoTotalDailyCookies = document.createElement('td');
tokyoTotalDailyCookies.textContent = tokyo.totalDailyCookies;
renderTokyo.appendChild(tokyoTotalDailyCookies);

// create dubai row

let renderDubai = document.createElement('tr');
lacationsTable.appendChild(renderDubai);

let dubaiName = document.createElement('td');
dubaiName.textContent = dubai.locationName;
renderDubai.appendChild(dubaiName);

for(let i=0; i<hours.length; i++){
  let dubaiCookiesPerHour = document.createElement('td');
  dubaiCookiesPerHour.textContent = dubai.cookiesPerHour[i];
  renderDubai.appendChild(dubaiCookiesPerHour);
}

let dubaiTotalDailyCookies = document.createElement('td');
dubaiTotalDailyCookies.textContent = dubai.totalDailyCookies;
renderDubai.appendChild(dubaiTotalDailyCookies);

// create paris row

let renderParis = document.createElement('tr');
lacationsTable.appendChild(renderParis);

let parisName = document.createElement('td');
parisName.textContent = paris.locationName;
renderParis.appendChild(parisName);

for(let i=0; i<hours.length; i++){
  let parisCookiesPerHour = document.createElement('td');
  parisCookiesPerHour.textContent = paris.cookiesPerHour[i];
  renderParis.appendChild(parisCookiesPerHour);
}

let parisTotalDailyCookies = document.createElement('td');
parisTotalDailyCookies.textContent = paris.totalDailyCookies;
renderParis.appendChild(parisTotalDailyCookies);

// create lima row

let renderLima = document.createElement('tr');
lacationsTable.appendChild(renderLima);

let limaName = document.createElement('td');
limaName.textContent = lima.locationName;
renderLima.appendChild(limaName);

for(let i=0; i<hours.length; i++){
  let limaCookiesPerHour = document.createElement('td');
  limaCookiesPerHour.textContent = lima.cookiesPerHour[i];
  renderLima.appendChild(limaCookiesPerHour);
}

let limaTotalDailyCookies = document.createElement('td');
limaTotalDailyCookies.textContent = lima.totalDailyCookies;
renderLima.appendChild(limaTotalDailyCookies);

// create total row

const allLocations = [seattle,tokyo,dubai,paris,lima];

let totalRow = document.createElement('tr');
lacationsTable.appendChild(totalRow);

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

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
