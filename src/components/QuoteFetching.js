import React, {useEffect, useState} from "react";
import axios from 'axios';

const QuoteFetching = () => {
    const [quotes, setQuotes] = useState([])
    const [id, setId] = useState(0)
    const [display, setDisplay] = useState('')

    useEffect(() => {
        axios.get('https://api.quotable.io/quotes')
        .then(response => {
            setQuotes(response.data)
        })
        .catch(error => {console.log(error)})
    }, [])

    const randomId = () => {
        setId(() => {return Math.floor(Math.random() * 20)})
        console.log(id)
    }
    return (
        <div className="container">
            <button type="button" onClick={randomId}>random</button>
            <div className="quote-container">
                {quotes.results[id].content}
            </div>
            <div className="author-container">
                {quotes.results[id].author}
            </div>
        </div>
    )
}

export default QuoteFetching