const callback4 = require('../callback4');

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
]
//testing

const testing = async () => {
    try {
        const functionOutput = await callback4();
        if (JSON.stringify(functionOutput) === JSON.stringify(expectedOutput)) {
            console.log('Code is working');
        } else {
            console.log('There is some issue');
        }
    } catch (err) {
        throw err;
    }
}

testing();