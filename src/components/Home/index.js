// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedList, isLoading: false})
  }

  componentDidMount = () => {
    this.getTeamsData()
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loaderCont">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <div className="homeCont">
            <div className="homeTitle">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="playerLogo"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="teamCardsCont">
              {teamsList.map(each => (
                <TeamCard eachTeam={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
