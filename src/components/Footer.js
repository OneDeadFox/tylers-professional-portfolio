import React from 'react';
import * as vars from './styleVars';


const styles = {
    footer: {
        backgroundColor: `${vars.v.headerColor}`,
        height: `${vars.v.footerHeight}vh`,
    }
}

export default function Footer() {
    return (
        <div style={styles.footer}>
            <img src='../images/githubMark.png' alt='Github link'/>
        </div>
    )
}