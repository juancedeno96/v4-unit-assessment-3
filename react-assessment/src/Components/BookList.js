import React, {Component} from 'react'

class Booklist extends Component {
    constructor() {
        super() 
        this.props = {
                  
    }  
}
    render() {
        const mappedBooks = this.props.books.map((e,i)=>(
            <section key = {i}>
                <img src = {e.img} alt={e.title} onClick={()=>this.props.addShelf(e.title)}/>
                <p>{e.title}</p>
                <p>{e.author}</p>
            </section>
        ))
        console.log(this.props.books)
        return(
            <div>
            <section className = "booklist1">
                {mappedBooks}
        
            </section>

            </div>
        )
    }
}
export default Booklist