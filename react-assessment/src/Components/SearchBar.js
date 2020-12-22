
import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick= this.handleClick.bind(this)
        this.handleReset=this.handleReset.bind(this)
    }
handleChange(input){
this.setState({userInput: input})
}
handleClick(){
    this.props.filterBooks(this.state.userInput)
    
}
handleReset(){
    this.props.resetSearch()
    this.setState({userInput: ''})
}
    render() {
       
        return(
            <section className='search'>
                <section className='searchbar'>
                <input value = {this.state.userInput} onChange={e=>this.handleChange(e.target.value)}/> 
                <button onClick={this.handleClick}>Search</button>
                <button onClick={this.handleReset}>Clear Search</button>
                </section>
            </section>
        )
    }
}

export default SearchBar