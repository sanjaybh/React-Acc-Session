import React from 'react';
import { checkPropTypes } from 'prop-types';

//{name, message, likes}
const Tweet = (props) => { 
    
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>number of Likes {props.likes}</h3>
        </div>
    );
}

export default Tweet;


/*
const mymsgstyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };


    <div className="tweet">
        <h3>Name</h3>
        <p>Message goes here</p>
        <h3>number of Likes</h3>
    </div>

    <div className="tweet">
        <h3>{props.name}</h3>
        <p>{props.message}</p>
        <h3>number of Likes {props.likes}</h3>
    </div>

    <div className="tweet">
        <h3 style={{color:'red', backgroundColor: "lightblue", padding: "5px"}}>{name}</h3>
        <p style={mymsgstyle}>{message}{name}</p>
        <h3>{likes} number of Likes</h3>
    </div>

*/