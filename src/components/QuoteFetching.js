import React, {useEffect, useState} from "react";
import axios from 'axios';
import {ArrowClockwise} from 'react-bootstrap-icons'
import './format/QuoteFetching.css'


const QuoteFetching = () => {
    const [quotes, setQuotes] = useState([])
    const [id, setId] = useState(0)
    const [author, setAuthor] = useState(true)

    useEffect(() => {
        axios.get('https://api.quotable.io/quotes')
        .then(response => {
            setQuotes(response.data)
            console.log(response.data)
        })
        .catch(error => {console.log(error)})
    }, [])

    const randomId = () => {
        setId(() => {return Math.floor(Math.random() * 20)})
        console.log(id)
    }
    const handleAuthorClick = () => {
        setAuthor(!author)
    }
    let display = <div className="container">
    <button type="button" onClick={randomId} className="button-random">random<ArrowClockwise /></button>
    <div className="quote-container">
        "{quotes.results[id].content}"
    </div>
    <button type="button" onClick={handleAuthorClick} className="display-button">
        <div className="author-container">
            <div className="author">
                {quotes.results[id].author}
            </div>
            <div className="tags">
                {quotes.results[id].tags.map(item => <span style={{marginRight: 8}}>{item}</span>)}
            </div>
        </div>
    </button>
</div>
    if (author === false) {
        display = <div>
            <button type="button" onClick={handleAuthorClick} className="display-button">
        <div className="author-container">
            <div className="author" style={{fontSize: 24, width: 240}}>
                {quotes.results[id].author}
            </div>
        </div>
            </button>
        <div className="quote-container">
            "{quotes.results[id].content}"
        </div>
        </div>
    }
    return (
        <div className="container">
            {display}
        </div>
    )
}

export default QuoteFetching