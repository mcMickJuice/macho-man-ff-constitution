import React, { propTypes, Component } from 'react'
import { getCurrentHolder } from '../service/dataService'
import * as less from '../styles/current-holder'

class CurrentHolder extends Component {
    constructor() {
        super();

        this.state = {
            holder: {},
            isLoading: true
        }
    }

    componentDidMount() {
        getCurrentHolder().then(holder => this.setState({
            holder,
            isLoading: false
        }))
    }

    render() {
        const {holder} = this.state;



        return <div className="mm-current-holder">
            <div>
                <h2>Current Belt Holder</h2>
            </div>

            <div className="mm-current-holder__team-name">
                {holder.team}
            </div>
            <div className="mm-current-holder__streak">
                Current Streak: {holder.streak}
            </div>

            <div className="mm-current-holder__team-image">
                <img
                    src={holder.imageUrl}
                    alt={holder.team} />
            </div>
        </div>
    }
}

export default CurrentHolder