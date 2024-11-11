import React from 'react'

const Cart = ({ data }) => {
    return (
        <div className='cards'>
            {
                data.map((items, index) => {
                    if (!items.urlToImage) {
                        return null;
                    } else {
                        return (
                            <div className="card" key={index}>
                                <img src={items.urlToImage} alt="" />
                                <div className='details'>
                                    <a href="" onClick={() => window.open(items.url)}>{items.title}</a>
                                    <p>{items.description}</p>
                                    <button onClick={() => window.open(items.url)}>Read More</button>
                                </div>
                            </div>
                        )
                    }
                })
            }

        </div>
    )
}

export default Cart