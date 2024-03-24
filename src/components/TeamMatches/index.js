// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData

    const updateMatchesDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updateRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      latestMatchDetails: updateMatchesDetails,
      recentMatches: updateRecentMatches,
      isLoading: false,
      teamBannerUrl,
    })
  }

  componentDidMount = () => {
    this.getMatchData()
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
    } = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loaderCont">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <div className="teamMatchesBg">
            <img src={teamBannerUrl} alt="team banner" className="bannerImg" />
            <h3>Latest Matches</h3>
            <LatestMatch data={latestMatchDetails} />
            <ul className="matchesCont">
              {recentMatches.map(each => (
                <MatchCard eachMatch={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
