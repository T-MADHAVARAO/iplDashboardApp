// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
  const resultStyle =
    eachMatch.matchStatus === 'Won' ? 'greenColor' : 'redColor'
  return (
    <li className="eachMatch">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={resultStyle}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
