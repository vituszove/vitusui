import React,{Component} from 'react'
import question from '../images/icons/question.png'
import GuideCard from './GuideCard'
class Guide extends Component{
    render(){
        return(
            <div className="first-section">
                <div className="guide-container">
                    <div className="guide-title"> <h2 className="white-text">How to Play</h2><img src={question} alt="" className="ques-icon"/>
                   </div>
                   <div className="guide-box-container"> 
                   <GuideCard />
                   <GuideCard />
                   <GuideCard />
                   <GuideCard />
                   </div>
                  

                    {/* <div className="container-title">
                        <img src={newgameicon} alt="new-game" />
                        <h2>New Games</h2>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Guide;