angular.module("app", [])
    .controller("calcCtrl", controller)
    .service("calcService", service)

controller.$inject = ["calcService"]
function controller(calcService) {
    var vm = this;
    var numberTeamsPerLeague = 12;
    

    vm.pick = null;
    vm.round = null;

    function validate(num) {
        vm.result = "";

        if(num == null || num === "") {
            return true;
        }

        if(isNaN(num)) {
            vm.result = "Please put in a number. " + num + " is not a number";
            return true;
        }

        return false;
    }

    vm.changePick = function () {
        var pick = vm.pick;
        //validate pick
        if(validate(pick)) return

        var result = calcService.getKeeperRoundByPick(numberTeamsPerLeague,pick);

        if (result.error) {
            vm.result = result.error.message;
        } else {
            vm.result = result.round;
        }
    }

    vm.changeRound = function () {
        var round = vm.round;
        
        if(validate(round)) return;

        var result = calcService.getKeeperRoundByRound(round);

        if (result.error) {
            vm.result = result.error.message;
        } else {
            vm.result = result.round;
        }
    }
}

function service() {

    function getRoundLost(round) {
        var roundLost = round - 1;
        var maxRoundLost = 8;

        return roundLost > maxRoundLost ? maxRoundLost : roundLost;
    }

    function getKeeperRoundByRound(round) {
        var roundLost = getRoundLost(round);

        return validateRound(roundLost);
    }

    function getKeeperRoundByPick(numberTeamsPerLeague, pick) {
        var round = Math.ceil(pick / numberTeamsPerLeague);

        var roundLost = getRoundLost(round);

        return validateRound(roundLost);
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
            round: round
        }
    }

    return {
        getKeeperRoundByPick: getKeeperRoundByPick,
        getKeeperRoundByRound: getKeeperRoundByRound
    }
}