import React from 'react';

import './_rating.css';

function Rating(props)
{
    return (
        <div className="Stars" style={{'--rating' : props.rating, '--ratingSise': props.size + 'rem'}}>

        </div>
    );
}

export default Rating;
