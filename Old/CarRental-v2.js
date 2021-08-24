/* 
Create a program for a rental car company that rents three types of cars Chevy Camaro 2SS, Ford Mustang GT, Dodge HellCat
The car names should be stored in an array, the car company should be store in an array
The price to rent/day should be stored in an array
The days rented for each car should be stored in an array
create a program that calculates the total cost to rent each car.
Be efficient in your program design 

This version is made to Appease the Prompt
*/


const carNames = ["Camaro 2SS", "Mustang GT", "Hellcat"];
const carCompanies = ["Chevy", "Ford", "Dodge"];
const carRents = [159, 133, 145];
const carDays = [1,3,5];

function rentCars(){
	console.log("Hello and welcome to our companies rental car program\n Below we will list which cars we have available and their rental prices");

	for(var i  = 0; i < carNames.length; i++){
		console.log("To rent a " + carCompanies[i] + " " + carNames[i] + " for " + carDays[i] + " day(s) will cost $" + (carRents[i]*carDays[i]));
	}

}

rentCars();


