import React from 'react'
import Plot from 'react-plotly.js'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            StockSymbol: this.props.ticker,
        }
    }

    
    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;

        const API_KEY = 'ICG1T5IU2X7MPB62';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.props.match.params.ticker}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_CALL) 
            .then(
                function (response) {
                    return response.json()
                }
            )
            .then(
                function (data) {
                    console.log(data)
                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    console.log(stockChartYValuesFunction)
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    })
                }
            )
    }
    render() {
        return (
            <div>
                <h1>Stock</h1>
                <Plot
                    data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    ]}
                    layout={ {width: 720, height: 440, title: this.props.match.params.ticker} }
                />
                <Link to='/'>go home</Link>
            </div>
        )
    }
}

export default Stock