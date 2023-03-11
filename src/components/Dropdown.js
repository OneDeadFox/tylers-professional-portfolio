import {React} from 'react';
import DropdownLink from './DropdownLink';
import * as vars from './styleVars';

const styles = {
    container: {
        width: `10em`,
        backgroundColor: `${vars.v.headerColor}`,
        display: `flex`,
        flexDirection: `column`,
        position: `absolute`,
        right: `0`,
        top: `${vars.v.headerHeight}vh`,
        zIndex: `1`,
    },

}

export default function Dropdown(isVisible) {

    const linkNames = vars.v.cards.map(card => card.description);

    return(
        <div 
            id={`dropdown-container`} 
            className={``} 
            style={styles.container}
        >
            {
                linkNames.map((link, i) => {
                    return <DropdownLink key={`${i}-link`} name={link} i={i}/>
                })
            }
        </div>
    )
}