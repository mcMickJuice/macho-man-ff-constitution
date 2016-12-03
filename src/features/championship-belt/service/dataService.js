const championshipWeeks = [
    { week: 7, title: 'Intercontinental Championship', imageUrl: '' },
    { week: 13, title: 'WCW World Champion', imageUrl: '' }
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
        imageUrl: '//imgur.com/vV3953r.png'
    },
    9: {
        team: 'Luby\'s Legends Lube',
        imageUrl: '//imgur.com/XjzsHVZ.png'

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
        imageUrl: '//imgur.com/5zNb4YT.png'
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
            teamId: 7,
            isWinner: true,
            score: 123
        },
        challenger: {
            teamId: 12,
            score: 116
        }
    },
    {
        week: 8,
        holder: {
            teamId: 7,
            score: 89
        },
        challenger: {
            teamId: 11,
            score: 140,
            isWinner: true
        }
    },
    {
        week: 9,
        holder: {
            teamId: 11,
            score: 130,
            isWinner: true
        },
        challenger: {
            teamId: 10,
            score: 118
        }
    },
    {
        week: 10,
        holder: {
            teamId: 11,
            score: 112
        },
        challenger: {
            teamId: 8,
            score: 149,
            isWinner: true
        }
    },
    {
        week: 11,
        holder: {
            teamId: 8,
            score: 96
        },
        challenger: {
            teamId: 9,
            score: 106,
            isWinner: true
        }
    },
    {
        week: 12,
        holder: {
            teamId: 9,
            score: 83
        },
        challenger: {
            teamId: 10,
            score: 85,
            isWinner: true
        }
    },
        {
        week: 13,
        holder: {
            teamId: 10,
        },
        challenger: {
            teamId: 8
        }
    }
]

export const getResults = () => {
    var promise = new Promise((resolve, reject) => {
        var join = results.reduce((acc, next) => {
            let holder = clone(teams[next.holder.teamId], next.holder);
            let challenger = clone(teams[next.challenger.teamId], next.challenger);

            acc.push(clone(next, { holder, challenger }))

            return acc;
        }, [])
        resolve(join)
    })

    return promise;
}

function extractCurrentHolderInfo(matchup) {
    var teamObj = matchup.holder.isWinner ? matchup.holder : matchup.challenger;
    var {teamId, team, imageUrl} = teamObj;

    return {
        teamId,
        team,
        imageUrl
    }
}

export const getCurrentHolder = () => {
    return getResults()
        .then(results => {
            const completedWeeksDescending = results.filter(r => r.holder.score != null)
                .sort((first, second) => first.week < second.week) //order descending by week

            const currentHolder = extractCurrentHolderInfo(completedWeeksDescending[0]);
            const currentStreak = completedWeeksDescending.reduce((streak, next) => {
                if ((next.holder.teamId === currentHolder.teamId || next.challenger.teamId === currentHolder.teamId) && streak.breakOut === false) {
                    streak.streak += 1;
                } else {
                    streak.breakOut = true;
                }

                return streak
            }, { streak: 0, breakOut: false });

            return {
                ...currentHolder,
        streak: currentStreak.streak
            }
        })
}

function clone(...args) {
    return Object.assign({}, ...args)
}