// const championshipWeeks = [
//     { week: 7, title: 'Intercontinental Championship', imageUrl: '' },
//     { week: 13, title: 'WCW World Champion', imageUrl: '' }
// ]

const teams = require('./teams.json')
const results = require('./results.json')

export const getResults = () => {
  var promise = new Promise((resolve) => {
    var join = results
    //sort by descending week
    .sort((first, second) => second.week - first.week)
    .reduce((acc, next) => {
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
                .sort((first, second) => second.week - first.week) //order descending by week

          var currentWeek = completedWeeksDescending[0];
          const currentHolder = extractCurrentHolderInfo(currentWeek);
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