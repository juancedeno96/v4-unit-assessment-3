import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'
import data from './data'


class App extends Component{
  constructor(){
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }

  addToShelf(val){
    this.setState({shelf: [...this.state.shelf, val]})
  }
  clearShelf(){
    this.setState({shelf: []})
  }

  filterBooks(input){
    let books = this.state.books
    let filteredBooks = [] 
    
    for (let i = 0; i<books.length; i++) {
         if (books[i].title.includes(input) || books[i].author.includes(input)) {
     filteredBooks.push(books[i])
         }
        }
  this.setState({books: filteredBooks})
  }
  render() {
   
    return(
      <div className="App">
        <Header/>
        <SearchBar filterBooks = {this.filterBooks}/>
        <br/>
        <Booklist books = {this.state.books} addShelf = {this.addToShelf}/>
        <Shelf shelf = {this.state.shelf} clearShelf = {this.clearShelf}/>
      
    </div>
  )
}
}

export default App;
