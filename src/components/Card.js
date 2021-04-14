import React from 'react';

const Card = ({name , email , id }) => {
    return (
        <div className='tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src ={`https://robohash.org/${id}stag?200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card;