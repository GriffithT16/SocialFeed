import { useState } from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {

    const [LikeButton, setLikeButton] = useState("inactive");
    const [DislikeButton, setDisLikeButton] = useState("inactive");
    function handleLike(){
        
        if(LikeButton === "inactive"){
            setDisLikeButton("inactive");
            setLikeButton("active");
        }else{
            setLikeButton("inactive")
        }
    }

    function handleDislike(){

        if(DislikeButton === "inactive"){
            setLikeButton("inactive");
            setDisLikeButton("active2")
        }else{
            setDisLikeButton("inactive")
        }
    }
        return ( 
            <div>
                <button className={LikeButton} onClick={handleLike}>Like</button>
                <button className={DislikeButton} onClick={handleDislike}>DisLike</button>
            </div>
        );
}
 
export default CustomButton
