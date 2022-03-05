const boards = require('./data/trello-callbacks/boards.json');
const callback2 = require('./callback2');
const callback3 = require('./callback3');


const task4 = () => {
    let info = new Promise((res, rej) => {
        setTimeout(async () => {
            //getting object for name Thanos in boards.json
            let boardObject = boards.find(object => object.name === 'Thanos');
            //getting id for Thanos
            let boardID = boardObject.id;
            //calling function from callback to get list info for Thanos's id
            let listInfo = await callback2(boardID);

            //getting pbject for name Mind from listsInfo
            let listObject = listInfo.find(object => object.name === 'Mind');
            //getting id for name mind
            let mindId = listObject.id;
            //calling callback function to get cards for mindID
            let cardsInfo = await callback3(mindId);
            //resolving final output
            res(cardsInfo);
        }, 2 * 1000);
    });
    //sending promise out of function
    return info;
}

// async function use() {

//     let data = await task4();
//     console.log(data);
// }

// use();

module.exports = task4;