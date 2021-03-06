/* 
    To add:
    Appointment Times

*/

const { exit } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Car {
    constructor(name, company, rent,days) {
        this.name = name;
        this.company = company;
        this.rent = rent;
        this.days = days;
    }
}

function randInt(min,max){
    return Math.floor((Math.random() * (max - min)) + min)
}

function incIndex(){
    console.log("Incorrect Index")
    main();
}

let companyCars = [new Car("Camaro 2SS", "Chevy", randInt(95, 150),0),new Car("Mustang GT", "Ford", randInt(132, 190),0), new Car("Hellcat", "Dodge", randInt(75, 100),0),new Car("CRV","Honda",randInt(1,50),0)]
let customerCars = [];

function rentCars(daysRented, whichCar){
    let carIndex = whichCar - 1;
    if(carIndex >= 0 && carIndex < companyCars.length){
        console.log("It will cost $" + (daysRented * companyCars[carIndex].rent) + " to rent the " + companyCars[carIndex].company + " " + companyCars[carIndex].name + " for " + daysRented + " days.")
        companyCars[carIndex].days = daysRented;
        customerCars.push(companyCars[carIndex]);
        companyCars.splice(carIndex,1);
        main()
    }
    else{
        incIndex();
    }
}

function displayCars(){
    console.log("==========================================================\nBelow we will list which cars we have available and their rental prices")
    for(var i = 0;i < companyCars.length; i++){
		console.log((i+1) + ": " + companyCars[i].company + " " + companyCars[i].name + " : $" + companyCars[i].rent + " per day")
	}
    rl.question("==========================================================\nWhich Car would you like to rent? (Enter the number)\n-", (answer) => {
        let whichCar = parseInt(answer)
        
        rl.question("==========================================================\nHow many Days would you like to rent\n-", (answer2) => {
            let daysRented = parseInt(answer2)
            rentCars(daysRented,whichCar)
          });
      });
}


function returnCar(){
    if(customerCars.length > 0){
        console.log("==========================================================\nBelow we will list which cars you currently are renting")
        for(var i = 0;i < customerCars.length; i++){
		    console.log((i+1) + ": " + customerCars[i].company + " " + customerCars[i].name + " for " + customerCars[i].days + " days")
	    }
        rl.question("==========================================================\nWhich Car would you like to return? (Enter the number)\n", (answer) => {
            let whichCar = parseInt(answer)
            if(answer > 0 && answer <= companyCars.length){
                companyCars.push(customerCars[whichCar-1])
                customerCars.splice(whichCar-1,1)
                main();
            }
            else{
                incIndex();
            }
      });
    }
    else{
        console.log("==========================================================\nYou dont have any cars currently rented")
        main();
    }

}

function checkOut(){
    console.log("==========================================================\nHere are all the cars you are going to rent")
    let totalCost = 0;
    for(var i = 0;i < customerCars.length; i++){
		console.log((i+1) + ": " + customerCars[i].company + " " + customerCars[i].name + " for " + customerCars[i].days + " days")
        totalCost += (parseInt(customerCars[i].days) * parseInt(customerCars[i].rent))
	}
    console.log("==========================================================\nIn Total it will cost you $" + totalCost + " to rent the car(s)");
    exit()

}

function CarRentalService(){
    rl.question("1: View Available Cars\n2: Return a Car\n3: Check Out\n4: Exit\n-", (answer) => {
        switch(parseInt(answer)){
            case 1:
                displayCars();
                break;
            case 2:
                returnCar();
                break;
            case 3:
                checkOut();
                break;
            case 4:
                rl.close()
                exit();
        }
    })
}


function main(){
	console.log("==========================================================\nHello and welcome to our companies rental car program\n")
    CarRentalService()
}

main()