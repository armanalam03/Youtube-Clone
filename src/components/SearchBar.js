/* import { Paper, TextField } from '@material-ui/core'; */
import React, {Component} from 'react';  
import '../App.css';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value});
        
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }
    render () {
        const { searchTerm } = this.state;
        
        return(
            <form onSubmit={this.handleSubmit} className="searchbar-form">
                <input type="text" placeholder="Search" className="searchbar" onChange={this.handleChange} />
                {/* <Link to="/search" state={{ searchTerm: {searchTerm} }}>
                    <PageviewIcon sx={{ fontSize: "45px" }}  onClick={this.handleSubmit} />
                </Link> */}
                <Link to="/search" /* onClick={this.handleSubmit} */ onClick={this.props.onFormSubmit(searchTerm)}>
                    <PageviewIcon sx={{ fontSize: "45px" }}  /* onClick={this.handleSubmit} */ />
                </Link>
            </form>
        )
    }
} 

export default SearchBar;