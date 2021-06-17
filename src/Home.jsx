import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import StockRow from './components/StockRow.js'

class Stock extends React.Component {
   
    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <StockRow ticker='AAPL' />
                                <StockRow ticker='GOOG' />
                                <StockRow ticker='MSFT' />
                                {/* <StockRow ticker='AMZN'/> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stock