// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl, id} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="linkCont">
      <li className="teamCard">
        <img src={teamImageUrl} alt={name} className="teamImg" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
