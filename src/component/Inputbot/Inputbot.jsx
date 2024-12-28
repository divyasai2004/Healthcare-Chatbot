import "./Inputbot.css"
import Send from "../sendbutton/Send";

const Inputbot = () =>{
    return(
        <div className="inputdiv">

            <input type="text" placeholder="Type your issue" className="input"/>
            <Send/>

        </div>
    )
}

export default Inputbot;