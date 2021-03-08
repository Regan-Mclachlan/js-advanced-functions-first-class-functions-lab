// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
   return drivers.slice(0,2)
}
function returnLastTwoDrivers(){
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

var createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

var fareDoubler = createFareMultiplier(2);


var fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (First2, Last2) {
  return Last2(First2);
};