import { iex } from '../config/iex';

export const stock = {
    
    latestPrice: (ticker, callback) => {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },
    // &exactDate=20210604
    latestPriceURL: (ticker) => {
       return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20200609&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
    },

    getYesterdaysClose: (ticker, date, callback) =>{
        fetch(stock.YesterdaysCloseURL(ticker, date))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },

    YesterdaysCloseURL: (ticker, date) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
     },
}