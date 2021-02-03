'use strict'

var numChildren = [1, 2, 3, 4, 5];
var partnerNames= ['Mariam', 'Balqees', 'Salamat', 'Aminat', 'Tomi'];
var locations = ['South Korea', 'Oman', 'Kuwait', 'Afghanistan', 'India'];
var jobs = ['Developer', 'Botanist', 'Hacker', 'Microbiologist', 'Neurosurgeon'];

function tellFortune(numChildren, partnerNames, locations, jobs) {
    let randomChildren = numChildren[Math.floor(Math.random() * numChildren.length)]; //randomly selects a compliment from the array
    let randomNames = partnerNames[Math.floor(Math.random() * partnerNames.length)]; //randomly selects a compliment from the array
    let randomLocations = locations[Math.floor(Math.random() * locations.length)]; //randomly selects a compliment from the array
    let randomJobs = jobs[Math.floor(Math.random() * jobs.length)]; //randomly selects a compliment from the array
    console.log(`You will be a ${randomJobs} in ${randomLocations}, married to ${randomNames} with ${randomChildren} kids.`);
}

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);