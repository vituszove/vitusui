
import React,{Component} from 'react'
import newgameicon from '../images/icons/newgame.png'
import NewGameSlider from './NewGameSlider'
class NewGame extends Component{
    render(){
        return(
            <div className="newgame-section">
                <div className="newgame-container">
                    <div className="newgame-title">
                        <img src={newgameicon} alt="new-game" />
                        <h2 className="white-text">New Games</h2>
                    </div>
                    <NewGameSlider/>
                </div>
            </div>
        )
    }
}
export default NewGame;