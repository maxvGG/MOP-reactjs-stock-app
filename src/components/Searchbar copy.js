import React, { Component, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom"

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            SearchTerm: null,
        }
    }
    
    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="type stock here" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}
 
export default Search;

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
handleChange(event) {
    this.setState({ redirect: true })
    this.setState({ setSearchTerm: event.target.value })
}
handleSubmit() {
    alert(this.state.setSearchTerm)

}