import React from 'react';

const Question = (props) =>{

    if(!props.showAnswer) {
        return (
            <div>
                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/kU3B75TyRiCgE270EyZnHjfivoq.jpg" alt=""/>
                <p>Name a movie that {props.actor.name} is in.</p>
            </div>
        )
    }

    else{
        return '';
    }
}

export default Question;
