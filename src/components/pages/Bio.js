import React from 'react';
import * as vars from '../styleVars';

const styles = {
    bioBody: {
        height: `${vars.v.bodyHeight}vh`,
        backgroundColor: `${vars.v.accent}`,
        overflow: `hidden`,
    },
    bio: {
        textAlign: "justify",
    },
    bioContent: {
        paddingTop: `2em`,
    },
    user: {
        width: `40%`,
        shapeOutside: `circle(50%)`,
        float: `left`,
        borderRadius: `100%`,
        padding: `.5em`,
    }
}
const skills = [`Full-stack Development`, `React`, `Other Thing`]

export default function Bio() {
    return (
        <div className={`col-lg-4 col-md-4 col-sm-12 order-lg-0 order-md-0 order-sm-1 px-0 text-justify`} style={styles.bioBody}>
            <article className={`bio`} style={styles.bio}>
                <img src='../images/me.jpg' alt='incredible web developer' style={styles.user}></img>
                <p style={styles.bioContent}>Ut itaque totam et galisum blanditiis ut dolorem perferendis aut eligendi sequi. Est quidem nisi est inventore suscipit qui dolor tempora et tenetur quia et neque explicabo quo labore totam a dolores cumque.</p>
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