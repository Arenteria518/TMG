import React from 'react';
import ImageLoader from '../../HOC/ImageLoader';

const QuestionImage = (props) => {
    let imgSrc = `https://image.tmdb.org/t/p/w300_and_h300_bestv2${props.imgPath}`;
    return <img src={imgSrc} alt=""/>
}

export default ImageLoader(QuestionImage);