const cardsList = require('./data/trello-callbacks/cards.json');

const cardsInfo = (listID) => {
    let info = new Promise((res, rej) => {
        setTimeout(() => {
            res(cardsList[listID]);
        }, 2 * 1000);
    });
    return info;
}

// async function use() {
//     let data = await cardsInfo('qwsa221');
//     console.log(data);
// }

// use();

module.exports = cardsInfo;