import React, { useEffect, useState } from 'react';
import '../style/card.css';
import img from '../images/content.jfif';

const Card = () => {
    // const [search, setSearch] = useState("")
    const [data, setData] = useState()

    // const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBNmk7cjh_5JftuHL4jOp4ADFKJlbgSUhw`

    // fetch(URL)
    //     .then(response => response.json())
    //     .then(data => {

    //     })

    const getApiData = async () => {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyBNmk7cjh_5JftuHL4jOp4ADFKJlbgSUhw").then((response) => response.json());
        setData(response)
    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    <div className='wrap-card'>
                        {
                            data && data.map((book) => (
                                <div className="card">
                                    <div className='img'>
                                        <img src={img} alt="" />
                                    </div>
                                    <hr />
                                    <h1 className='header-card'>{book.kind}
                                    </h1>
                                    <hr />
                                    <p>N. SHAH</p>
                                    <div className='card-detail'>
                                        <a href="/">Details</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card