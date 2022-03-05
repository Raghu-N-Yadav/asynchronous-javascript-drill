
const boardArray = require('./data/trello-callbacks/boards.json');

const boardInfo = (boardID) => {
    let info = new Promise((res, rej) => {
        setTimeout(() => {
            res(boardArray.find(object => object.id === boardID));
        }, 2 * 1000)
    });
    return info;
};



// async function use() {
//     let obj = await boardInfo('mcu453ed');
//     console.log(obj);
// }
// // console.log(boardInfo('mcu453ed'));

// use()

module.exports = boardInfo;