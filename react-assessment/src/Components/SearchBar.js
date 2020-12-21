
import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick= this.handleClick.bind(this)
    }
handleChange(input){
this.setState({userInput: input})
}
handleClick(){
    this.props.filterBooks(this.state.userInput)
    this.setState({userInput: ''})
}
    render() {
       
        return(
            <section>
                <input value = {this.state.userInput} onChange={e=>this.handleChange(e.target.value)}/>
                <button onClick={this.handleClick}>Search</button>
            </section>
        )
    }
}

export default SearchBar