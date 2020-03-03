import React from 'react';
import { Form, Input, Button } from 'reactstrap';

import './searchbar.scss'

class SearchBar extends React.Component {

    state = {
        term: "",
    };

    handleInputChange = (e) => {
        this.setState({
            term: e.target.value,
        });
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
        // TODO: CALL CALLBACK FROM PARENT COMPONENT

    }


    render() {
        return (
            <div className="search-form">
                <Form onSubmit={this.handleSearchSubmit}>
                    <Input
                        className="search-input"
                        placeholder="Search Youtube Videos"
                        input={this.state.term}
                        onChange={this.handleInputChange}
                    />
                    <Button block className="search-button">Search</Button>
                </Form>
            </div>
        )
    }
}

export default SearchBar;