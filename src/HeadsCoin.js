import React, {Component} from "react"
import "./Coin.css"

class Coin extends Component {
    render () {
        return <div>
            <img className="coin-image" src={this.props.imageUrl} alt="Heads" />
        </div>
    }
}

export default Coin;