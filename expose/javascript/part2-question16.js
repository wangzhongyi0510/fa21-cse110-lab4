let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let item in statistics){
    let value = item;
    if(value.charAt(0)=== 'r' || statistics[value] % 2 == 1 ){
        console.log('The value of property is ', statistics[item]);
    }
}


