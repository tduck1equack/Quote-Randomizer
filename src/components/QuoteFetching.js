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
        setDisplay(quotes.map(q => q.results[id].content))
        console.log(id)
    }
    console.log(quotes.results); console.log(id)
    console.log(quotes.results[id].content)
    return (
        <div>
            
        </div>
    )
}

export default QuoteFetching