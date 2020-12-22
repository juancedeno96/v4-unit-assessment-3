import React, {Component} from 'react'
class Shelf extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render () {
const mappedTitles = this.props.shelf.map((e,i)=>(
    <section key = {i}>
        <p>{e}</p>
    </section>
))
        return (
            <section className='shelf'>
                
                <h2>Your Shelf</h2>
               <p>{mappedTitles}</p> 
                <button onClick={()=>this.props.clearShelf()}>clear</button>
                
            </section>
        )
    }
}
export default Shelf