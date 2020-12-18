import React, {Component} from 'react'

class Shelf extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    addToShelf(val) {
        
        this.setState({shelf: this.state.shelf.push(val) })
    }

    render () {
        return (
            <section>
                shelf
            </section>
        )
    }
}
export default Shelf