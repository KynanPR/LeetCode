type details = string[];

const seniorAge = 61;
const passengerMask = { phoneNo: [0, 9], gender: [10, 10], age: [11, 12], seat: [13, 14] };

class Passenger {
	phoneNo: string;
	gender: string;
	age: number;
	seat: number;

	constructor(detail: string) {
		this.phoneNo = detail.slice(passengerMask.phoneNo[0], passengerMask.phoneNo[1] + 1);
		this.gender = detail.slice(passengerMask.gender[0], passengerMask.gender[1] + 1);
		this.age = parseInt(detail.slice(passengerMask.age[0], passengerMask.age[1] + 1));
		this.seat = parseInt(detail.slice(passengerMask.seat[0], passengerMask.seat[1] + 1));
	}

	get isSenior(): boolean {
		return this.age >= seniorAge;
	}
}

function countSeniors(details: string[]): number {
	const passengers: Passenger[] = details.map((detail) => {
		return new Passenger(detail);
	});

	const seniorCount = passengers.reduce((total: number, passenger: Passenger) => {
		return total + Number(passenger.isSenior);
	}, 0);

	return seniorCount;
}

let test = [
	"9751302862F0693",
	"3888560693F7262",
	"5485983835F0649",
	"2580974299F6042",
	"9976672161M6561",
	"0234451011F8013",
	"4294552179O6482",
];

console.log("there are:", countSeniors(test), "seniors");
