import React from 'react'
import Card from './Card'

const Tours = ({ tours, removeTour }) => {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love </h2>
            </div>
            <div className='container-cards'>
                {/* we will use map function to pass props to multiple cards.. */}
                {
                    tours.map((tour) => {
                        {/* ...tour ==> we are passing copy of entire object tour, so it will pass all the information
                        so ...tour will contain id, image, name, price, etc
                        */ }
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours