const path = require('path');
const fileSystemService = require('./file-system-service');

const teamsJsonFilePath = path.resolve(
  __dirname,
  '../src/features/championship-belt/service/teams.json'
);

const resultsJsonFilePath = path.resolve(
  __dirname,
  '../src/features/championship-belt/service/results.json'
);

module.exports.getActiveTeams = () => {
  return fileSystemService.getJsonFromFile(teamsJsonFilePath).then(teamMap => {
    return Object.entries(teamMap).map(pair => {
      const [teamId, team] = pair;
      return Object.assign({}, team, { teamId: Number(teamId) });
    });
  });
};

module.exports.addResult = rawResultObject => {
  /**
   * incoming 
   * 
 "selectedWeek": 1,
  "selectedYear": 2017,
  "holderTeam": null,
  "holderScore": 0,
  "challengerScore": 0,
  "challengerTeam": null,
  "winningTeam": null,
  "isHolderWinner": true,
  */

  const {
    selectedWeek,
    selectedYear,
    holderTeam,
    holderScore,
    challengerTeam,
    challengerScore,
    isHolderWinner
  } = rawResultObject;

  const newResult = {
    week: selectedWeek,
    year: selectedYear,
    holder: {
      teamId: holderTeam.teamId,
      score: holderScore,
      isWinner: isHolderWinner
    },
    challenger: {
      teamId: challengerTeam.teamId,
      score: challengerScore,
      isWinner: !isHolderWinner
    }
  };

  return fileSystemService.updateJsonFileContents(
    resultsJsonFilePath,
    results => {
      return [...results, newResult];
    }
  );

  /**
   * expected
   * {
    "week": 11,
    "holder": {
      "teamId": 8,
      "score": 96
    },
    "challenger": {
      "teamId": 9,
      "score": 106,
      "isWinner": true
    }
  }, */
};
