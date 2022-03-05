const callback1 = require('../callback1');

async function use() {
    let obj = await callback1('mcu453ed');
    // console.log(obj);
    return obj;
}
// console.log(boardInfo('mcu453ed'));


//testing

const testing = async () => {
    try {
        const expectedOutput = { id: 'mcu453ed', name: 'Thanos', permissions: {} };
        const functionOutput = await use();
        if (JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)) {
            console.log('Code is working');
        } else {
            console.log('There is some issue');
        }

    } catch (err) {
        throw err;
    }
}

testing();