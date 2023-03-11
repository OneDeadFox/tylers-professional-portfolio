import {React} from 'react';
import * as vars from './styleVars';

const styles = {
    link: {
        color: `black`,
        textDecoration: "none",
        backgroundColor: `${vars.v.headerColor}`,
        paddingTop: `.3em`,
        paddingBottom: `.3em`,
        border: `none`,
        borderBottom: `1px solid white`
    }
}

export default function DropdownLink(props) {

    return(
        <a 
            href={`#spring-${props.i}`}
            style={styles.link}>
            {`${props.name}`}
        </a>
    )
}