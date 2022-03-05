const fs = require('fs');

//task1 and task2
const readFile = (filePath) => {
    //reading lipsum file
    fs.readFile(`${filePath}`, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let newData = data.toUpperCase();
        let newFileName = 'upperCasedata.txt';
        let newFilePath = '../data/fs-callbacks/upperCasedata.txt'
        // console.log(data.toUpperCase());

        //writing data to a new file
        fs.writeFile(newFilePath, newData, err => {
            if (err) throw err;
            console.log('data is written to new file');
        });

        //writing filename to a file
        fs.appendFile('../data/fs-callbacks/filenames.txt', newFileName + '\n', err => {
            if (err) throw err;
            console.log('File name is saved');
        });


    });
}

// const path = 'data/fs-callbacks/lipsum.txt'
// readFile(path);


//function for task 3
const readupperCase = (filePath) => {
    //reading file
    fs.readFile(`${filePath}`, 'utf8', (err, data) => {
        if (err) throw err;

        let lowerCaseData = data.toLocaleLowerCase();
        let splitData = lowerCaseData.split(".");
        let sentencesFileName = 'sentences.txt';
        newFilePath2 = '../data/fs-callbacks/sentences.txt';

        //saving each sentence to file
        splitData.forEach((sentence) => {
            fs.appendFile(newFilePath2, sentence + '\n', err => {
                if (err) throw err;
                console.log('Sentence saved \n')
            });
        });

        //writing filename to a file
        fs.appendFile('../data/fs-callbacks/filenames.txt', sentencesFileName + '\n', err => {
            if (err) throw err;
            console.log('File name is saved');
        })
        // console.log(splitData);
    });

}

// const path2 = 'data/fs-callbacks/upperCasedata.txt'
// readupperCase(path2);

//function for task4
const readFileNames = (filePath) => {
    fs.readFile(`${filePath}`, 'utf8', (err, data) => {
        if (err) throw err;

        let filesNames = data.split('\n');
        let sortedDataFileName = 'sortedData.txt';

        //reading each file
        filesNames.forEach((fName) => {
            if (fName) {
                //reading data of each file
                fs.readFile(`../data/fs-callbacks/${fName}`, 'utf8', (err, data) => {
                    if (err) throw err;

                    //appending data to a new file
                    fs.appendFile(`../data/fs-callbacks/${sortedDataFileName}`, data + '\n', err => {
                        if (err) throw err;
                        console.log('Data is saved to new file\n');
                    });
                });
            }
        });

        //storing file name;
        fs.appendFile('../data/fs-callbacks/filenames.txt', sortedDataFileName + '\n', err => {
            if (err) throw err;
            console.log('File name is saved');
        });

        //console.log(filesNames);
    });
}

// const path3 = 'data/fs-callbacks/filenames.txt';
// readFileNames(path3);

//function to delete files
const deleteFiles = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        let fileNames = data.split('\n');

        fileNames.forEach((file) => {
            if (file) {
                fs.unlink(`../data/fs-callbacks/${file}`, err => {
                    if (err) throw err;

                    console.log('files deleted');
                });
            }
        });


        // console.log(fileNames);
    });
}

// const path4 = 'data/fs-callbacks/filenames.txt';
// deleteFiles(path4);


module.exports = { readFile, readupperCase, readFileNames, deleteFiles };