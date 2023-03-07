import React from 'react';
import * as vars from './styleVars';

console.log(vars.v.bodyHeight)

export default function WorkCard(props) {
    const springHeight = 45 / props.cardNum;
    const styles = {
        spring: {
            width: `100%`,
            height: `${springHeight}vh`,
            backgroundImage: `url(${props.img})`,
            backgroundSize: `cover`,
            fontSize: `1.5em`,
            position: `relative`,
            overflow: `hidden`,
        },
        card: {
            backgroundColor: `${vars.v.accent2}`,
            width: `8em`,
            height: `60vh`,
            position: `absolute`,
            top: `0`,
            right: `-8em`,
            display: `flex`,
        },
        edge: {
            backgroundColor: `#77777733`,
            width: `2px`,
            height: `60vh`,
            position: `absolute`,
            top: `0`,
            left: `8em`,
        },
        edge2: {
            backgroundColor: `#77777733`,
            width: `4px`,
            height: `60vh`,
            position: `absolute`,
            top: `0`,
            left: `8em`,
        },
        edge3: {
            backgroundColor: `#77777733`,
            width: `6px`,
            height: `60vh`,
            position: `absolute`,
            top: `0`,
            left: `8em`,
        },
        content: {
            position: `absolute`,
            left: `.5em`,
        },
    }

    const onHover = (e) => {
        //hide other items 
        const allItems = document.querySelectorAll(`.accordianItem`);
        allItems.forEach(item => {
            const tempStyle = item.getAttribute(`style`)
            item.setAttribute(`style`, `${tempStyle}; height: ${springHeight}vh; transition: .5s;`)
        });

        //hide other cards
        const allCards = document.querySelectorAll(`.itemCard`)
        allCards.forEach(card => {
            const tempStyle = card.getAttribute(`style`)
            card.setAttribute(`style`, `${tempStyle}; right: -8em; transition: .5s;`)
        });

        //hide other edges
        const allEdges = document.querySelectorAll(`.edge`)
        allEdges.forEach(edge => {
            const tempStyle = edge.getAttribute(`style`)
            edge.setAttribute(`style`, `${tempStyle}; right: -8em; transition: .5s;`)
        });

        //expand current item
        const spring = document.getElementById(`spring-${props.dataId}`);
        const tempStyle = spring.getAttribute(`style`);
        spring.setAttribute(`style`, `${tempStyle}; height: ${vars.v.bodyHeight - (springHeight * (props.cardNum - 1))}vh; transition: .5s;`)

        //move card in from side
        const card = document.getElementById(`card-${props.dataId}`);
        const tempStyleCard = card.getAttribute(`style`);
        card.setAttribute(`style`, `${tempStyleCard}; right: 0; transition: .5s`);

        //get random transform numbers for edges
        const ranNum = [];
        for (let i = 0; i < 3; i++) {
            let ranRotate = Math.floor(Math.random() * 60 - 30);
            let ranTime = (Math.round(100* Math.random()) / 100);

            //ensure rotation var is less than -10 or greater than 10
            const fixRot = () => {
                if (ranRotate > -10 && ranRotate < 0) {
                    ranRotate -= 10;
                } else if(ranRotate > 0 && ranRotate < 10) {
                    ranRotate += 10;
                }
                return;
            }

            //ensure time var is between 0.2 and 0.8
            const fixTime = () => {
                console.log(`loop`);
                if(ranTime < 0.5) {
                    ranTime += 0.1;
                    fixTime();
                } else if (ranTime > 0.7) {
                    ranTime -= 0.1;
                    fixTime();
                }
                ranTime = (Math.round(100* ranTime) / 100);
                return;
            }

            //change duplicate values
            const changeDuplicate = () => {
                if(ranNum.indexOf(ranRotate) !== -1) {
                    ranRotate = ranRotate * -1;
                    if(ranNum.indexOf(ranRotate)  !== -1) {
                        ranRotate = Math.round(ranRotate + 3);
                        changeDuplicate();
                        return;
                    }
                    changeDuplicate();
                    return;
                } else if(ranNum.indexOf(ranTime)  !== -1) {
                    ranTime = Math.round((ranTime + .1) * 100) / 100;
                    changeDuplicate();
                    return;
                }
            }

            fixRot();
            fixTime();
            changeDuplicate();

            //add transform vars to array
            ranNum.push(ranRotate);
            ranNum.push(ranTime);

            console.log(`${ranNum}`)
        }

        //move in edges
        //edge 1
        const edge1 = document.getElementById(`edge-1-${props.dataId}`);
        const edge1Sping = [
            {
                transform: `rotate(${ranNum[0]}deg)`,
                left: `8em`
            },
            {
                transform: `rotate(0)`,
                left: `0`
            }
        ]
        const edge1Dur = ranNum[1] * 1000;
        const edge1Timing = {
            duration: edge1Dur,
            iterations: 1,
        }
        edge1.animate(edge1Sping, edge1Timing);
        setTimeout(() => {
            const edge1TempStyle = edge1.getAttribute(`style`);
            edge1.setAttribute(`style`, `${edge1TempStyle}; left: 0; transition: 0s`)
        }, edge1Dur);
        
        //edge 2
        const edge2 = document.getElementById(`edge-2-${props.dataId}`);
        const edge2Sping = [
            {
                transform: `rotate(${ranNum[2]}deg)`,
                left: `8em`
            },
            {
                transform: `rotate(0)`,
                left: `0`
            }
        ]
        const edge2Dur = ranNum[3] * 1000;
        const edge2Timing = {
            duration: edge2Dur,
            iterations: 1,
        }
        edge2.animate(edge2Sping, edge2Timing);
        setTimeout(() => {
            const edge2TempStyle = edge2.getAttribute(`style`);
            edge2.setAttribute(`style`, `${edge2TempStyle}; left: 0; transition: 0s`)
        }, edge2Dur);
        
        //edge 3
        const edge3 = document.getElementById(`edge-3-${props.dataId}`);
        const edge3Sping = [
            {
                transform: `rotate(${ranNum[4]}deg)`,
                left: `8em`
            },
            {
                transform: `rotate(0)`,
                left: `0`
            }
        ]
        const edge3Dur = ranNum[5] * 1000;
        const edge3Timing = {
            duration: edge3Dur,
            iterations: 1,
        }
        edge3.animate(edge3Sping, edge3Timing);
        setTimeout(() => {
            const edge3TempStyle = edge3.getAttribute(`style`);
            edge3.setAttribute(`style`, `${edge3TempStyle}; left: 0; transition: 0s`)
        }, edge3Dur);

    }

        return (
            <section id={`spring-${props.dataId}`} className={`accordianItem`} style={styles.spring} onMouseEnter={() => onHover()}>
                {`${props.description}`}
                <div id={`card-${props.dataId}`} className={`itemCard`} style={styles.card}>
                    <div id={`edge-1-${props.dataId}`}className={`edge`} style={styles.edge}></div>
                    <div id={`edge-2-${props.dataId}`}className={`edge`} style={styles.edge2}></div>
                    <div id={`edge-3-${props.dataId}`}className={`edge`} style={styles.edge3}></div>
                    <div style={styles.content}>
                        I'm the card
                    </div>
                </div>
            </section>
        )
}