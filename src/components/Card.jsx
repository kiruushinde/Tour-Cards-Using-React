import React, { useState } from 'react'

const Card = ({ id, image, price, name, info, removeTour }) => {

    // here read more and show less are changing on our UI, so we will make use of useState to show the changes..

    // initially the value of readmore will be false
    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}...`;



    // now, we are clicking on that show less, the it is obvious ki there will be onClick listener.., which will handle show less and read more..

    // observation: if readmore value is false, then readmore is displayed, so we will when we click on readmore then it must be set to true, so that show less is displayed.. and that task is done by this function, we are switching between boolean values..
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className='card'>

            <img className='image' src={image} alt="" />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className='tour-price'>₹ {price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>

                <div className="description">
                    {description}

                    <span className='readmore' onClick={readmoreHandler}>
                        {/* if readmore is false then we will set the text to readmore, otherwise if it is true then the text is show less. */}
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className='btn' onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card