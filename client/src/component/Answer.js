import React from 'react';

const Answer = (props) =>{

    if(props.showAnswer){
        return (
            <div>Hello from Answer</div>
        )
    }
    else{
        return '';
    }
}

export default Answer;