import React from "react";

class SearchBar extends React.Component {
    state = {
        inputValue: ""
    };

    onInputChange = (e) => {
        this.setState({inputValue: e.target.value});
        console.log(e.target.value);
    };

    render() {
        return (
            <div>
                <h3>Search Bar</h3>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.onInputChange}
                />
                <button disabled={!this.state.inputValue} className="btn btn-success" onClick={this.props.onClick.bind(null, this.state.inputValue)}>Click me</button>
            </div>
        )
    }
}

export default SearchBar;
