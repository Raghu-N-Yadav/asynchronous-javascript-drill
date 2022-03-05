const problem2 = require('../problem2');
const fs = require('fs');


//testing

const testing = () => {
    try {
        setTimeout(async () => {
            const path1 = '../data/fs-callbacks/lipsum.txt';
            await problem2.readFile(path1);

        }, 1000);

        setTimeout(async () => {
            const path2 = '../data/fs-callbacks/upperCasedata.txt'
            problem2.readupperCase(path2);

        }, 2000);

        setTimeout(async () => {
            const path3 = '../data/fs-callbacks/filenames.txt';
            problem2.readFileNames(path3);

        }, 3000);

        setTimeout(async () => {
            const path4 = '../data/fs-callbacks/filenames.txt';
            problem2.deleteFiles(path4);
        }, 4000);

        setTimeout(async () => {
            fs.unlink(`../data/fs-callbacks/filenames.txt`, err => {
                if (err) throw err;
                console.log('names file deleted');
            });
        }, 5000);
        //console.log('Testing successful');
    } catch (err) {
        console.log(err);
    }
}


testing();
