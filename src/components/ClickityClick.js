// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false,
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })

    }

    render() {
        return (
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
                <p>
                    {this.state.count}
                </p>
            </div>
        )
    }
}

export default ClickityClick;

// import React from 'react';
// import ReactDOM from 'react-dom';

// import ClickityClick from './components/ClickityClick';

// ReactDOM.render(<ClickityClick />, document.getElementById('root'));
