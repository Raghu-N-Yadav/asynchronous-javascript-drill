const fs = require('fs');

const makeid = require('./randomFileNameGenrator');

//function to make a directory
const makeDirectory = (dirPath) => {
    fs.mkdir(dirPath, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Directory Created\n');

    });
};

//function to make a file
const makeFile = (dirPath, fileData) => {

    console.log('creating 5 random JSON files.' + `Inside directory ${dirPath}`);

    let num = 0;

    while (num < 5) {
        let fileName = makeid(5);

        fs.writeFile(`${dirPath}/${fileName}.json`, JSON.stringify(fileData), (err) => {
            if (err) throw err;
            // console.log(`File ${fileName} is create inside Directory ${dirPath}`);
        });

        num++;
    }

}

//function to delete ll files inside a directory 
const deleteFiles = (dirPath) => {
    fs.readdir(dirPath, function (err, files) {
        if (err) {
            // some sort of error
            throw err;
        } else {
            if (files.length !== 0) {
                // console.log(files);

                //deleteing files one by one from directory
                files.forEach(file => {
                    fs.unlink(`${dirPath}/${file}`, (err) => {
                        if (err) throw err;

                        console.log(`${file} was deleted'`);
                    });
                });
            }
            else {
                console.log('There are no files');
            }
        }

    });
}

module.exports = { makeDirectory, makeFile, deleteFiles }




// const directoryPath = 'problem1Dircectory';
// makeDirectory(directoryPath);

// let inputObject = {
//     name: 'Raghu',
//     class: 'A',
//     sport: 'Football'
// }

// makeFile(directoryPath, inputObject);
// deleteFiles(directoryPath);


