// React | contentful.js
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../reducers/book';

class FetchBooks extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        children: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.actions(this.props.query);
    }

    render() {
        return this.props.children({
            books: this.props.books
        })
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: (params) => dispatch({ type: "API_CALL_REQUEST", query:params })   
    }
}

function mapStateToPorps (state) {
    const books = state.get('book')
    return{
        books
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(FetchBooks);