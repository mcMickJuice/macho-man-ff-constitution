const championshipWeeks = [
    {week: 7, title: 'Intercontinental Championship', imageUrl: ''},
    {week: 13, title: 'WCW World Champion', imageUrl: ''}
]

const teams = {
    1: {
        team: 'Shirtless Vince McMahon',
        imageUrl: '//imgur.com/8fDKrst.png'
    },
    2: {
        team: 'Los Charros',
        imageUrl: '//imgur.com/wRekjOw.png'
    },
    3: {
        team: 'Going Bald(win)',
        imageUrl: '//imgur.com/bVBbu0f.png'
    },
    4: {
        team: 'Team Bobarino',
        imageUrl: '//imgur.com/N9huQtD.png'
    },
    5: {
        team: 'Pack Lives Matter',
        imageUrl: '//imgur.com/5we5ldf.png'
    }, 
    6: {
        team: 'Who Art Thou',
        imageUrl: '//imgur.com/a8vFvDc.png'
    }, 
    7: {
        team: 'Fitz Rawl About The Benjamins',
        imageUrl: '//imgur.com/KYrYeWR.png'
    },
    8: {
        team: 'Large Lacy Lingerie',
        imageUrl: '//imgur.com/XjzsHVZ.png'
    },
    9: {
        team: 'Luby\'s Legends Lube',
        imageUrl: '//imgur.com/vV3953r.png'
    },
    10: {
        team: 'Team DankinData',
        imageUrl: '//imgur.com/gzULWnG.png'
    },
    11: {
        team: 'My Team Cheats',
        imageUrl: '//imgur.com/ihCIv62.png'
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
            teamId: 2,
            isWinner: false,
            score: 115
        },
        challenger: {
            teamId: 7,
            isWinner: true,
            score: 183
        }
    },
    {
        week: 6,
        holder: {
            teamId: 7,
            isWinner: true,
            score: 132
        },
        challenger: {
            teamId: 6,
            isWinner: false,
            score: 80
        }
    },
    {
        week: 7,
        holder: {
            teamId: 7
        },
        challenger: {
            teamId: 12
        }
    }
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