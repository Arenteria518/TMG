import React from 'react';

import QuestionImage from './QuestionImage';

const Question = (props) =>{
    if(!props.showAnswer) {
        return (
            <div>
                <QuestionImage imgPath={props.actor.profile_path} height={300}/>
                <p>Name a movie that {props.actor.name} is in.</p>
            </div>
        )
    }

    else{
        return '';
    }
}

export default Question;
