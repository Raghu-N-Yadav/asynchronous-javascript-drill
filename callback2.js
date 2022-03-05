const boardLists = require('./data/trello-callbacks/lists.json');

const listInfo = (boardID) => {
    let info = new Promise((res, rej) => {
        setTimeout(() => {
            res(boardLists[boardID])
        }, 2 * 1000);
    });
    return info;
}

// async function use() {
//     let data = await listInfo('abc122dc')
//     console.log(data);
// }

// use();

module.exports = listInfo;