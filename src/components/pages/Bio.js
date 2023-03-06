import React from 'react';
import * as vars from '../styleVars';
// import Skills from './Skills';

const styles = {
    bioBody: {
        height: `${vars.v.bodyHeight}vh`,
        backgroundColor: "pink",
        overflow: `hidden`,
    },
    bio: {
        textAlign: "justify",
    }
}
const skills = [`Full-stack Development`, `React`, `Other Thing`]

export default function Bio() {
    return (
        <div className={`col-lg-4 col-md-4 col-sm-12 order-lg-0 order-md-0 order-sm-1 text-justify`} style={styles.bioBody}>
            <article className={`bio`} style={styles.bio}>
                Ut itaque totam et galisum blanditiis ut dolorem perferendis aut eligendi sequi. Est quidem nisi est inventore suscipit qui dolor tempora et tenetur quia et neque explicabo quo labore totam a dolores cumque.
            </article>
            <section className={`skills mt-2`}>
                Skills:
            {
                skills.map((skill, i) => {
                    return(
                        <p className={`skill`} key={i}>
                            {skill}
                        </p>
                    )
                })
            }
            </section>
        </div>
    )
}