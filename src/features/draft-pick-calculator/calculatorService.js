const numberTeamsPerLeague = 12;

function getRoundLost(round) {
  var roundLost = round - 1;
  var maxRoundLost = 8;

  return roundLost > maxRoundLost ? maxRoundLost : roundLost;
}



function validateRound(round) {
  if (round < 1) {
    return {
      error: {
        message: 'You can\'t keep a pick selected in the first round.'
      }
    }
  }

  return {
    roundLost: round
  }
}

export function getKeeperRoundByRound(round) {
  var roundLost = getRoundLost(round);

  return validateRound(roundLost);
}

export function getKeeperRoundByPick(pick) {
  var round = Math.ceil(pick / numberTeamsPerLeague);

  var roundLost = getRoundLost(round);

  return validateRound(roundLost);
}