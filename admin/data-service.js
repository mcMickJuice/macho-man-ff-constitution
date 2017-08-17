const path = require('path');
const fileSystemService = require('./file-system-service');

module.exports.getActiveTeams = () => {
  const filePath = path.resolve(
    __dirname,
    '../src/features/championship-belt/service/teams.json'
  );
  return fileSystemService.getJsonFromFile(filePath).then(teamMap => {
    return Object.entries(teamMap).map(pair => {
      const [teamId, team] = pair;
      return Object.assign({}, team, { teamId: Number(teamId) });
    });
  });
};
