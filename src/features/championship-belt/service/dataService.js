const teams = {
    1: {
        team: 'Shirtless Vince McMahon',
        imageUrl: 'http://imgur.com/8fDKrst.png'
    },
    2: {
        team: 'Los Charros',
        imageUrl: 'http://imgur.com/wRekjOw.png'
    },
    3: {
        team: 'Going Bald(win)',
        imageUrl: 'http://imgur.com/bVBbu0f.png'
    },
    4: {
        team: 'Team Bobarino',
        imageUrl: 'http://imgur.com/N9huQtD.png'
    },
    5: {
        team: 'Pack Lives Matter',
        imageUrl: 'http://imgur.com/5we5ldf.png'
    }, 
    6: {
        team: 'Who Art Thou',
        imageUrl: 'http://imgur.com/a8vFvDc.png'
    }, 
    7: {
        team: 'Fitz Rawl About The Benjamins',
        imageUrl: 'http://imgur.com/KYrYeWR.png'
    },
    8: {
        team: 'Large Lacy Lingerie',
        imageUrl: 'http://imgur.com/XjzsHVZ.png'
    },
    9: {
        team: 'Luby\'s Legends Lube',
        imageUrl: 'http://imgur.com/vV3953r.png'
    },
    10: {
        team: 'Team DankinData',
        imageUrl: 'http://imgur.com/gzULWnG.png'
    },
    11: {
        team: 'My Team Cheats',
        imageUrl: 'http://imgur.com/ihCIv62.png'
    },
    12: {
        team: 'Spider 2 Y Banana Threat',
        imageUrl: ''
    }
}

const results = [
    {
        week: 1,
        holder: {
            isWinner: false,
            teamId: 1,
            score: 132
        },
        challenger: {
            isWinner: true,
            teamId: 3,
            score: 145
        }
    },
    {
        week: 2,
        holder: {
            isWinner: false,
            teamId: 3,
            score: 94
        },
        challenger: {
            isWinner: true,
            teamId: 2,
            score: 126
        }
    },
    {
        week: 3,
        holder: {
            isWinner: true,
            teamId: 2,
            score: 129
        },
        challenger: {
            isWinner: false,
            teamId: 1,
            score: 121
        }
    },
    {
        week: 4,
        holder: {
            teamId: 2,
            isWinner: true,
            score: 104
        },
        challenger: {
            teamId: 8,
            isWinner: false,
            score: 91
        }
    },
    {
        week: 5,
        holder: {
            teamId: 2
        },
        challenger: {
            teamId: 7
        }
    },
]

export const getResults = () => {
    var promise = new Promise((resolve, reject) => {
        var join = results.reduce((acc, next) => {
            let holder = clone(teams[next.holder.teamId], next.holder);
            let challenger = clone(teams[next.challenger.teamId], next.challenger);

            acc.push(clone(next, {holder, challenger}))

            return acc;
        }, [])
        resolve(join)
    })

    return promise;
}

function clone(...args) {
    return Object.assign({}, ...args)
}