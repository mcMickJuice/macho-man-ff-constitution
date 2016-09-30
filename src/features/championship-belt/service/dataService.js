const teams = {
    1: {
        team: 'Joyce',
        imageUrl: ''
    },
    2: {
        team: 'Shimmy',
        imageUrl: ''
    },
    3: {
        team: 'Zach',
        imageUrl: ''
    },
    4: {
        team: 'Rob',
        imageUrl: ''
    }
}

const results = [
    {
        week: 1,
        result: '100-90',
        holder: {
            isWinner: true,
            teamId: 2,
            score: 100
        },
        challenger: {
            isWinner: false,
            teamId: 4,
            score: 90
        }
    },
    {
        week: 2,
        result: '90-105',
        holder: {
            isWinner: false,
            teamId: 2,
            score: 105
        },
        challenger: {
            isWinner: true,
            teamId: 4,
            score: 90
        }
    },
    {
        week: 3,
        holder: {
            teamId: 4
        },
        challenger: {
            teamId: 3
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