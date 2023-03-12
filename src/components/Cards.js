import React, { useEffect } from 'react';
import WorkCard from './WorkCard';
import * as vars from './styleVars';

export default function Cards(props) {
    const styles = {
        container: {
            display: `flex`,
            justifyContent: `space-around`,
            flexFlow: `column wrap`,
            alignItems: `stretch`,
        }
    }

    const cards = vars.v.cards;

    const openPrimary = (e) => {
        const cardNum = cards.length
        const springHeight = 45 / cardNum;
        let expandedSpringHeight;
        if (props.isMobile) {
            expandedSpringHeight = vars.v.footerHeight + vars.v.bodyHeight - (springHeight * (cardNum - 1));
        } else {
            expandedSpringHeight = vars.v.bodyHeight - (springHeight * (cardNum - 1));
        }
        //expand top spring
        const spring = document.getElementById(`spring-0`);
        const tempStyle = spring.getAttribute(`style`)
        spring.setAttribute(`style`, `${tempStyle}; height: ${expandedSpringHeight}vh;`)

        const edge1 = document.getElementById(`edge-1-0`);
        const edge1TempStyle = edge1.getAttribute(`style`);
        edge1.setAttribute(`style`, `${edge1TempStyle}; left: 0; transition: 0s`)
        const edge2 = document.getElementById(`edge-2-0`);
        const edge2TempStyle = edge2.getAttribute(`style`);
        edge2.setAttribute(`style`, `${edge2TempStyle}; left: 0; transition: 0s`)
        const edge3 = document.getElementById(`edge-3-0`);
        const edge3TempStyle = edge3.getAttribute(`style`);
        edge3.setAttribute(`style`, `${edge3TempStyle}; left: 0; transition: 0s`)

        //move top card in
        const card = document.getElementById(`card-0`);
        const tempStyleCard = card.getAttribute(`style`);
        card.setAttribute(`style`, `${tempStyleCard}; right: 0; transition: .5s;`);

        //remove filter
        // const filter = document.getElementById(`filter-0`);
        // const filterTempStyle = filter.getAttribute(`style`)
        // filter.setAttribute(`style`, `${filterTempStyle}; opacity: 0;`)
    }

    useEffect(() => {
        openPrimary()
    })

    return (
        <div 
            id="cardAccordian" 
            className={`accordion accordion-flush d-flex flex-column col-lg-${props.colSize} col-md-8 col-sm-12 order-lg-1 order-md-1 order-sm-0 px-0`} 
            style={styles.container}>
            {cards.map((card, i) =>
                <WorkCard
                    key={`${i}-card`}
                    dataId={i}
                    img={card.img}
                    url={card.url}
                    repo={card.repo}
                    description={card.description}
                    cardNum={cards.length}
                    isMobile={props.isMobile}
                />)
            }
        </div>
    )
}