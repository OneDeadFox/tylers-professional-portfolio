import React from 'react';
import * as vars from './styleVars';
import github from './images/ghMark.png'
import linkedIn from './images/li.png'


const styles = {
    footer: {
        backgroundColor: `${vars.v.headerColor}`,
        height: `${vars.v.footerHeight}vh`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
    },
    logos: {
        maxHeight: `80%`,
        paddingLeft: `.75em`,
        paddingRight: `.75em`,
    },
    link: {
        height: `${vars.v.footerHeight}vh`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
    },
}

export default function Footer() {
    return (
        <div style={styles.footer}>
            <a href='https://github.com/OneDeadFox' style={styles.link}>
                <img src={github} alt='Github link' style={styles.logos}/>
            </a>
            <a href='#LinkedIn' style={styles.link}>
                <img src={linkedIn} alt='LinkedIn link' style={styles.logos}/>
            </a>
        </div>
    )
}