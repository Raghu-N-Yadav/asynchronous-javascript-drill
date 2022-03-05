const callback2 = require('../callback2');

async function use() {
    let data = await callback2('abc122dc')
    // console.log(data);
    return data;
}

// use();

const expectedOutput = [
    { id: 'xyzb778', name: 'Flight' },
    { id: 'llkj123', name: 'Telepathy' },
    { id: 'ghyu556', name: 'Telekinesis' }
];
//testing 

const testing = async () => {
    try {
        const functionOutput = await use();
        if (JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)) {
            console.log('Code is working');
        } else {
            console.log('There is some issue');
        }
    } catch (err) {
        if (err) throw err;
    }
}

testing();