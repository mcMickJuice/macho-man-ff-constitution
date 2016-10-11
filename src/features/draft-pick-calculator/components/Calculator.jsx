import React, {Component} from 'react';
import * as calculator from '../calculatorService'


class Calculator extends Component {

    constructor() {
        super();

        this.changeRound = this.changeRound.bind(this);
        this.changePick = this.changePick.bind(this);

        this.state = {
            round: null,
            pick: null
        }
    }

    changeRound(evt) {
        let round = evt.target.value;
        let newState = { pick: null, error: null, roundLost: null }
        if (round == 0) {
            newState.round = null;
        } else {
            round = Number(round)
            const {error, roundLost} = calculator.getKeeperRoundByRound(round);
            newState = {...newState, round, error, roundLost}
        }

        this.setState(newState)
    }

    changePick(evt) {
        let pick = evt.target.value;
        let newState = { round: null, error: null, roundLost: null }
        if (pick == 0) {
            newState.pick = null;
        } else {
            pick = Number(pick)
            const {error, roundLost} = calculator.getKeeperRoundByPick(pick);
            newState = {...newState, pick, error, roundLost}
        }

        this.setState(newState)
    }

    render() {
        const {pick, round, roundLost, error} = this.state;

        const result = error != null
            ? <div className="error">{error.message}</div>
            : <div className="results">{roundLost}</div>

        return (
            <div className="calculator">
                <div className="form">
                    <div className="row">
                        <label htmlFor="round">Round: </label>
                        <input type="number" value={round || 0} onInput={this.changeRound}/>
                    </div>
                    <div className="row">
                        <label htmlFor="pick">
                            Pick:
                        </label>
                        <input type="number" value={pick || 0} onInput={this.changePick}/>
                    </div>
                </div>
                {result}
            </div>
        );
    };
}

export default Calculator;