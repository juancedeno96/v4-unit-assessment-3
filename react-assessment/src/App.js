import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'

class App extends Component{
  constructor(){
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)

  }

  addToShelf(val){
    this.setState({shelf: this.state.shelf.push(val)})
  }
  

  render() {
   

    return(
      <div className="App">
        <Header/>
        <br/>
        <section></section>
        <Booklist books = {this.state.books} addShelf = {this.addToShelf}/>
        <Shelf shelf = {this.state.shelf}/>
      
    </div>
  )
}
}

export default App;
