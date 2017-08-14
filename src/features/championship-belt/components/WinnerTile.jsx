import React from 'react'
import {teamShape} from 'react'

const style = {
  maxHeight: '100px',
  margin: 'auto'
}

const WinnerTile = ({team}) => {
  return <div style={style} className="mm-tile">
        <img className="mm-tile__winner-image" style={{maxHeight: '100px', display: 'block'}} src={team.imageUrl} alt={team.team}/>
    </div>
}

WinnerTile.propTypes = teamShape

export default WinnerTile