import React from 'react';

import QuestionImage from './QuestionImage';

const Question = (props) =>{
    let answerText = props.isCorrect ? 'CORRECT!' : 'WRONG!';
    let classNames = "overlay" + (props.showAnswer ? ' show-answer' : '') + (!props.isCorrect ? ' wrong': '')
        return (
            <div>
                <div className={"image-container"}>
                    <QuestionImage imgPath={props.actor.profile_path}/>
                    <div className={classNames}>
                        <div className="text">{answerText}</div>
                    </div>
                </div>
                <p>Name a movie that {props.actor.name} is in.</p>
            </div>
        )
}

export default Question;
