import React, {Component} from 'react';
import { connect } from 'react-redux';
import './quiz.css'

import {bindActionCreators } from "redux";
import { selectActor } from "../../actions/index";
import { fetchPopularActors, fetchMovies, movieSearch, clearSearch} from "../../actions/index";

import Question from './Question';
import Answer from './Answer';
import Guess from './Guess';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false,
            isCorrect: true
        }
        this.toggleAnswer = this.toggleAnswer.bind(this);
        this.toggleIsCorrect = this.toggleIsCorrect.bind(this);

    }

    componentDidMount(){
        //sets random actor as selected actor from state.actors
        this.props.fetchPopularActors().then(() => {
            this.props.selectActor(this.props.actors[Math.floor(Math.random() * this.props.actors.length)]);
        });

    }

    toggleAnswer() {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    toggleIsCorrect(isCorrect){
        this.setState({isCorrect: isCorrect})
    }

    render(){
        return(
            <div className="quiz">
                <Question showAnswer={this.state.showAnswer} isCorrect={this.state.isCorrect} actor={this.props.selectedActor}/>
                {/*<Answer showAnswer={this.state.showAnswer}/>*/}
                <Guess
                    movies={this.props.movies}
                    actors={this.props.actors}
                    fetchMovies={this.props.fetchMovies}
                    selectedActor={this.props.selectedActor}
                    selectActor={this.props.selectActor}
                    suggestions = {this.props.searchResults}
                    movieSearch ={this.props.movieSearch}
                    clearSearch={this.props.clearSearch}
                    toggleAnswer={this.toggleAnswer}
                    toggleIsCorrect={this.toggleIsCorrect}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        actors: state.actors,
        selectedActor: state.selectedActor,
        movies: state.movies,
        searchResults: state.searchResults
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectActor: selectActor,
        fetchPopularActors: fetchPopularActors,
        fetchMovies: fetchMovies,
        movieSearch: movieSearch,
        clearSearch
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);