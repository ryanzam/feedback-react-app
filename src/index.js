import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Buttons component with props passed from parent (App) component
const Buttons = (props) =>{
    return(
        <div>
            <button className="button is-primary is-large" onClick={props.goodClick}>Good</button>
            <button className="button is-light is-large" onClick={props.neutralClick}>Neutral</button>
            <button className="button is-danger is-large" onClick={props.poorClick}>Poor</button>

        </div>
    )
}

//Simple Statistics component
const Statistics = () => <h2 className="statistic title is-spaced">Statistics </h2>


//Statistic component
const Statistic = (props) => {
//destructuring i.e. prop.value.goodValue, props.value.neutralValue, etc into the following
    const {goodValue, neutralValue, poorValue} = props.value
    let totalValue = goodValue+neutralValue+poorValue
    
    //if no feedback given then 
    if (!totalValue) {
        return (
            <p>No feedback given!! Click the buttons above!</p>
        )
    }
    // else display stats in a table
    return(
        <table className="table">
            <tbody>
                <tr>
                    <td>Good</td><td><span className="tag is-info">{goodValue}</span></td>
                </tr>
                <tr>
                    <td>Neutral</td><td><span className="tag is-info">{neutralValue}</span></td>
                </tr>
                <tr>
                    <td>Poor</td><td><span className="tag is-info"> {poorValue}</span></td>
                </tr>
                <tr>
                    <td>Average </td><td><span className="tag is-info">{ ((goodValue-poorValue)/(totalValue)).toFixed(1)}</span></td>
                </tr>
                <tr>
                    <td>positive feedback </td><td><span className="tag is-info">{ (goodValue/(totalValue)*100).toFixed(1)} %</span> </td>
                </tr>
            </tbody>
        </table>
        )
}

//Main component
class App extends React.Component {
    constructor(props){
        super(props)
        //initial states of feedback property
        this.state = {
            goodValue: 0,
            neutralValue:0,
            poorValue: 0
        }
    }
//function to increase value of good
    handleGoodClick = () => {
        //change state of goodValue, adding 1
        this.setState({goodValue : this.state.goodValue + 1})
    }

//handle Neutral click function
    handleNeutralClick = () => {
        this.setState({neutralValue : this.state.neutralValue + 1})
    }
//handle poor button click, increments 1
    handlePoorClick = () => {
        this.setState({poorValue : this.state.poorValue + 1})
    }

    render() {
    return(
        <div className="container">

            <h1 className="title is-spaced">Give your Feedback!!</h1>
            <h2 className="subtitle"><span class="icon has-text-info">
                <i class="fas fa-flag"></i>
            </span> A simple React App!</h2>

            <Buttons goodClick={this.handleGoodClick} neutralClick={this.handleNeutralClick} poorClick={this.handlePoorClick}/>

            <Statistics />

            <Statistic value={this.state}/>
           
        </div>
    )
}
}



ReactDOM.render(<App />, document.getElementById('root'));
