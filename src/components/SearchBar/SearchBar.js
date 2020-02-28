import React from 'react';
import { Form, Input, Button } from 'reactstrap';



import './searchbar.scss'

class SearchBar extends React.Component {

    state = {
        term: "",
    }

    handleInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    handleSubmit =(e)=> {
        e.preventDefault();
        this.props.handleSubmit(this.state.term);
    }

    render() {
        return (
            <Form inline className="search-form" onSubmit={this.handleSubmit}>
                <Input
                    className="search-input"
                    placeholder="Search for Something"
                    type="text"
                    value={this.state.term}
                    onChange={this.handleInputChange}
                />
                <Button className="search-button">Search</Button>
            </Form>
        )
    }
}

export default SearchBar;