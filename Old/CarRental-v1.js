/* 
Create a program for a rental car company that rents three types of cars Chevy Camaro 2SS, Ford Mustang GT, Dodge HellCat
The car names should be stored in an array, the car company should be store in an array
The price to rent/day should be stored in an array
The days rented for each car should be stored in an array
create a program that calculates the total cost to rent each car.
Be efficient in your program design 

This version uses Object Oriented Programming
*/

function car(name, company, rent) {
	this.name = name;
	this.company = company;
	this.rent = rent;
}

var companyCars = [new car("Camaro 2SS", "Chevy", 159),new car("Mustang GT", "Ford", 133), new car("Hellcat", "Dodge", 145)]

function rentCars(){
	console.log("Hello and welcome to our companies rental car program\n Below we will list which cars we have available and their rental prices");
	for(var i = 0;i < companyCars.length; i++){
		console.log((i+1) + ": " + companyCars[i].company + " " + companyCars[i].name + ": $" + companyCars[i].rent + " per day")
	}
	console.log("")
	for(var i = 0;i < companyCars.length; i++){
		var days = Math.floor(Math.random() * 10)
		console.log("To rent the " + companyCars[i].company + " " + companyCars[i].name + " for " + days + " days will cost $" + companyCars[i].rent * days);
	}
}

rentCars();


