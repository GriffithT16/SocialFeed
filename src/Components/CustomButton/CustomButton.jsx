import { useState } from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {

    const [buttonClassLike, setButtonClassLike] = useState("inactive");
    const [buttonClassDislike, setButtonClassDisLike] = useState("inactive");
    function handleLike(){
        
        if(buttonClassLike === "inactive"){
            setButtonClassDisLike("inactive");
            setButtonClassLike("active");
        }else{
            setButtonClassLike("inactive")
        }
    }

    function handleDislike(){

        if(buttonClassDislike === "inactive"){
            setButtonClassLike("inactive");
            setButtonClassDisLike("active2")
        }else{
            setButtonClassDisLike("inactive")
        }
    }
        return ( 
            <div>
                <button className={buttonClassLike} onClick={handleLike} style={{'margin':'1.5em', 'border-radius': '0.375rem'}}>Like</button>
                <button className={buttonClassDislike} onClick={handleDislike} style={{'margin':'1.5em', 'border-radius': '0.375rem'}}>DisLike</button>
            </div>
        );
}
 
export default CustomButton
