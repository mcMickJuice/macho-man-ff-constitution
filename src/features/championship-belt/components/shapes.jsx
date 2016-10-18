import {PropTypes} from 'react'

export const teamShape = PropTypes.shape({
    team: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isWinner: PropTypes.bool,
    score: PropTypes.number
}).isRequired