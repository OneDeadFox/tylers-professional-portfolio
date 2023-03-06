import React from 'react';
import * as vars from './styleVars';


const styles = {
    footer: {
        backgroundColor: `green`,
        height: `${vars.v.footerHeight}vh`,
    }
}

export default function Footer() {
    return (
        <div style={styles.footer}>

        </div>
    )
}