import React from 'react';
import File from '../assets/resume.odt'
import * as vars from '../styleVars';

const styles = {
    resumeBody: {
        height: `${vars.v.bodyHeight}vh`,
        backgroundColor: `${vars.v.accent}`,
        overflow: `hidden`,
    },
    resume: {
        textAlign: "justify",
    }
}

export default function Resume() {
    return(
        <div className={`col-lg-6 col-md-6 col-sm-12 order-lg-0 order-md-0 order-sm-1 px-0`} style={styles.resumeBody}>
            <article className={`resume`} style={styles.resume}>
                <a href={File} download={`tjb.odt`}>Download Resume</a>
                <h4>Skills</h4>
            </article>
        </div>
    )
}