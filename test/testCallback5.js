
const callback5 = require('../callback5');


const expectedOutput = [
    [
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
    ],
    [
        {
            id: '1',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.'
        },
        {
            id: '2',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.'
        },
        {
            id: '3',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.'
        },
        {
            id: '4',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.'
        }
    ]
];

//testing 
const testing = async () => {
    try {
        const functionOutput = await callback5();
        if (JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)) {
            console.log('Code is working');
        } else {
            console.log('There is some issue')
        }
    } catch (err) {
        if (err) throw err;
    }
}

testing();