const fs = require('fs');
const problem1 = require('../problem1');

//defining a directory name
const dirName = 'sample1';

//input data for json file
const testObj = {
    day: 'Monday',
    taskCompleted: false,
    joker: 'Coming back'
}

// //creating a directory
// problem1.makeDirectory(directoryName);

// //making 5 random files inside directory
// let output1 = problem1.makeFile(directoryName, inputData);

// //deleting all files
// let output2 = problem1.deleteFiles(directoryName);



//testing 
const testing = async (directoryName, inputData) => {
    try {
        //creating a directory
        await problem1.makeDirectory(directoryName);

        //making 5 random files inside directory
        await problem1.makeFile(directoryName, inputData);

        //deleting all files
        await problem1.deleteFiles(directoryName);

        console.log('Testing successful\n\n');
    } catch (err) {

        console.log('There is some Error', err);
    }
}

testing(dirName, testObj);
