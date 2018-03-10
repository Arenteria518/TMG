import React, {Component} from 'react';
import { connect } from 'react-redux';

import {bindActionCreators } from "redux";
import { selectActor } from "../actions";
import { fetchPopularActors, fetchMovies, movieSearch} from "../actions";

import Question from './Question';
import Answer from './Answer';
import Guess from './Guess';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false
        }
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
                <Guess
                    movies={this.props.movies}
                    actors={this.props.actors}
                    fetchMovies={this.props.fetchMovies}
                    selectedActor={this.props.selectedActor}
                    selectActor={this.props.selectActor}
                    suggestions = {this.props.searchResults}
                    movieSearch ={this.props.movieSearch}
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
        movieSearch: movieSearch
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);