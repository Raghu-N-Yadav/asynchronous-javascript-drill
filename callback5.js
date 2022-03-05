const boards = require('./data/trello-callbacks/boards.json');
const callback2 = require('./callback2');
const callback3 = require('./callback3');

const task5 = () => {
    let info = new Promise((res, rej) => {
        setTimeout(async () => {
            //getting object for name Thanos in boards.json
            let boardObject = boards.find(object => object.name === 'Thanos');
            //getting id for Thanos
            let boardID = boardObject.id;
            //calling function from callback to get list info for Thanos's id
            let listInfo = await callback2(boardID);

            //getting pbject for name Mind from listsInfo
            let listObject = listInfo.filter(object => object.name === 'Mind' || object.name === 'Space');

            //getting id for name mind and space 
            let mindAndSpaceId = listObject.map(object => object.id);

            //calling callback function to get cards for mindID and space id
            let cardsInfo = mindAndSpaceId.map(async (ids) => {
                let cardsData = await callback3(ids);
                return cardsData;
            });
            //resolve all promises inside cardsInfo 
            const promise4all = Promise.all(cardsInfo);

            // //resolving final output
            res(promise4all);

        }, 2 * 1000);
    });
    //sending promise out of function
    return info;
}

// async function use() {

//     let data = await task5();
//     console.log(data);
// }

// use();

module.exports = task5;