import React, { Component } from 'react';
import handlesearch from './handlesearch';
class Search extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            SearchTerm: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({ SearchTerm: event.target.value })
        console.log(this.state.SearchTerm)
    }
    handleSubmit() {
        handlesearch(this.state.SearchTerm)
    }
    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                    <input type="text" placeholder="type stock here" onChange={event => this.handleChange(event)}/>
                    <input type='submit' placeholder='search' />
                </form>
            </div>
        );
    }
}
 
export default Search;

