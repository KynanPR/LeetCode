var seniorAge = 61;
var passengerMask = { phoneNo: [0, 9], gender: 10, age: [11, 12], seat: [13, 14] };
var Passenger = /** @class */ (function () {
    function Passenger(detail) {
        this.phoneNo = detail.slice(passengerMask.phoneNo[0], passengerMask.phoneNo[1]);
        this.gender = detail.slice(passengerMask.gender[0]);
        this.age = parseInt(detail.slice(passengerMask.age[0], passengerMask.age[1]));
        this.seat = parseInt(detail.slice(passengerMask.seat[0], passengerMask.seat[1]));
    }
    Object.defineProperty(Passenger.prototype, "isSenior", {
        get: function () {
            return this.age >= seniorAge;
        },
        enumerable: false,
        configurable: true
    });
    return Passenger;
}());
function countSeniors(details) {
    var passengers = details.map(function (detail) {
        return new Passenger(detail);
    });
    var seniorCount = passengers.reduce(function (total, passenger) {
        return total + Number(passenger.isSenior);
    }, 0);
    return seniorCount;
}
var test = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
console.log("there are:", countSeniors(test), "seniors");
