const callback3 = require('../callback3');

async function use() {
    let data = await callback3('qwsa221');
    // console.log(data);
    return data;
}

// use();


const expectedOutput = [
    {
        id: '1',
        description: 'Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar'
    },
    {
        id: '2',
        description: 'Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar'
    },
    {
        id: '3',
        description: 'Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar'
    }
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