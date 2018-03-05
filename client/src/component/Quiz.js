import React, {Component} from 'react';
import { connect } from 'react-redux';

import {bindActionCreators } from "redux";
import { selectActor } from "../actions";
import { fetchActors} from "../actions";

import Question from './Question';
import Answer from './Answer';
import Guess from './Guess';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Actor: {},
            Actors: [],
            showAnswer: false
        }
    }

    componentDidMount(){
        //sets random actor as selected actor from state.actors
        this.props.fetchActors();
        this.props.selectActor(this.props.actors[Math.floor(Math.random() * this.props.actors.length)]);
    }

    toggleAnswer() {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    renderList(){
        return this.props.actors.map((actor) => {
            return(
                <li key={actor.name}>{actor.name}</li>
            )
        })
    }

    render(){
        return(
            <div>
                <Question showAnswer={this.state.showAnswer} actor={this.props.selectedActor}/>
                <Answer showAnswer={this.state.showAnswer}/>
                <Guess/>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        actors: state.actors,
        selectedActor: state.selectedActor
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectActor: selectActor,
        fetchActors: fetchActors
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);