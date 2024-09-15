import React, { Component } from "react";
import HeadsCoin from "./HeadsCoin";
import TailsCoin from "./TailsCoin";

const HeadsimageUrl = "https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_UF894,1000_QL80_.jpg";
const TailsimageUrl = "https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_UF894,1000_QL80_.jpg";

class CoinFlipper extends Component {
    state = {
        headsCount: 0,
        tailsCount: 0,
        isHeads: null  // Track whether it's heads or tails
    };

    handleClick = () => {
        const coinFlip = Math.random() < 0.5 ? "heads" : "tails";  // Simplified coin flip
        
        this.setState(prevState => ({
            headsCount: coinFlip === "heads" ? prevState.headsCount + 1 : prevState.headsCount,
            tailsCount: coinFlip === "tails" ? prevState.tailsCount + 1 : prevState.tailsCount,
            isHeads: coinFlip === "heads"  // Set whether it's heads or tails
        }));
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Flip Coin</button>
                
                {this.state.isHeads === null ? (
                    <p>Click to flip the coin!</p>
                ) : this.state.isHeads ? (
                    <HeadsCoin imageUrl={HeadsimageUrl} />
                ) : (
                    <TailsCoin imageUrl={TailsimageUrl} />
                )}

                <p>Heads: {this.state.headsCount}</p>
                <p>Tails: {this.state.tailsCount}</p>
            </div>
        );
    }
}

export default CoinFlipper;
