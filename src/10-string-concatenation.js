const uberRide = 200;
const driverCommission = 70 / 100;
const nameOfDriver = "Akhil";
const uberDriverEarning = uberRide * driverCommission;
const uberEarning = uberRide - uberDriverEarning;

const output =
  "From a ride costing R" +
  uberRide +
  ",\n" +
  nameOfDriver +
  " earns R " +
  parseInt(uberDriverEarning) +
  " with a 70% commission, while uber earns R" +
  parseInt(uberEarning) +
  " with a 30% commission";

// const output = `From a ride costing R${uberRide},${nameOfDriver} earns R${uberDriverEarning} with a 70% commission, while Uber earns R${uberEarning} with a 30% commission`

console.log(output);