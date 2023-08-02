import React from 'react';

function Card(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='mypic' className='card__img' width={350} height={250} />
                    <div className='card__info'>
                        <span className='card__category'>{props.title}</span>
                        <h3 className='card__title'>{props.sname}</h3>
                        <a href={props.link} target="_blank"
                        ><button>
                                watch Now
                            </button>
                        </a>   </div>
                </div>
            </div>
        </>
    );
}

export default Card;