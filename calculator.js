angular.module("app", [])
    .controller("calcCtrl", controller)
    .service("calcService", service)

controller.$inject = ["calcService"]
function controller(calcService) {
    var vm = this;
    var numberTeamsPerLeague = 12;


    vm.pick = null;
    vm.round = null;

    function troll(isTroll) {
        vm.troll = isTroll;
    }

    function validate(num) {
        troll(false);        
        vm.result = "";
        vm.isError = false;

        if (num == null || num === "") {
            return true;
        }

        if (isNaN(num)) {
            vm.result = "Please put in a number. " + num + " is not a number";
            vm.isError = true;
            return true;
        }

        if (num <= 0) {
            troll(true);
            return true;
        }

        return false;
    }

    vm.changePick = function () {
        vm.round = null;
        var pick = vm.pick;
        //validate pick
        if (validate(pick)) return

        var result = calcService.getKeeperRoundByPick(numberTeamsPerLeague, pick);

        if (result.error) {
            vm.result = result.error.message;
            vm.isError = true;
        } else {
            vm.result = "Round Lost: " + result.round;
        }
    }

    vm.changeRound = function () {
        vm.pick = null;
        var round = vm.round;

        if (validate(round)) return;

        var result = calcService.getKeeperRoundByRound(round);

        if (result.error) {
            vm.result = result.error.message;
            vm.isError = true;
        } else {
            vm.result = "Round Lost: " + result.round;
        }
    }
}

