// Write your code here
import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = data

  return (
    <div className="latestMatchCont">
      <div className="matchBasic">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latestMatchTeamLogo"
      />
      <div className="matchDetails">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Seconds Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
