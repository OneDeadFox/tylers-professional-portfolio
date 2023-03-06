import React, { useEffect } from 'react';
import WorkCard from './WorkCard';
import * as vars from './styleVars';

const cards = [
    {
        img: "https://place-puppy.com/200x200",
        url: "https://github.com/OneDeadFox/blockheads-professional-portfolio",
        description: "A good boy"
    },
    {
        img: "https://place-puppy.com/200x200",
        url: "https://github.com/OneDeadFox",
        description: "The best boy"
    },
    {
        img: "https://place-puppy.com/200x200",
        url: "https://github.com/OneDeadFox/blockheads-professional-portfolio",
        description: "The worst"
    }
]

export default function Cards() {
    const springHeight = 45 / cards.length;

    const openPrimary = (e) => {
        const spring = document.getElementById(`spring-0`);
    
        const tempStyle = spring.getAttribute(`style`)
        spring.setAttribute(`style`, `${tempStyle}; height: ${vars.v.bodyHeight - (springHeight * (cards.length - 1))}vh;`)
    }
    
    useEffect(() => {
        openPrimary()
    })

    return (
        <div className={`accordion accordion-flush d-flex flex-column col-lg-8 col-md-8 col-sm-12 order-lg-1 order-md-1 order-sm-0 px-0`} id="cardAccordian">
            {cards.map((card, i) => <WorkCard key={`${i}-card`} dataId={i} img={card.img} url={card.url} description={card.description} cardNum={cards.length}/>)}
        </div>
    )
}