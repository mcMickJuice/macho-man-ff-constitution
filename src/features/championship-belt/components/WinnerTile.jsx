import React from 'react'
import {teamShape} from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 150px;
height: 150px;
&>img {
  width: 150px;
  height: 100%;
  display: block;
}`

const WinnerTile = ({team}) => {
  return <Container>
        <img src={team.imageUrl} alt={team.team}/>
    </Container>
}

WinnerTile.propTypes = teamShape

export default WinnerTile