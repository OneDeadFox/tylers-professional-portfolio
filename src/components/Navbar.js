import React from 'react';
import * as vars from './styleVars';

//CSS Stylings
const styles = {
    bar: {
        height: `${vars.v.headerHeight}vh`,
        backgroundColor: `${vars.v.headerColor}`,
        display: "flex",
        padding: `0`,
    },
    link: {
        color: `white`,
        textDecoration: "none",
        
    },
    inactive: {
    }
}
const workEntries = [`Bio`, `Contact`, `Resume`];

export default function Navbar({currentPage, handlePageChange}) {
    //Create HTML Elements
    return (
        <nav className={`navbar flex-fill justify-space-between`} style={styles.bar}>
            <section className={`header`}>
                Header Deets
            </section>
            <section className={`links d-flex`}>
            {
                workEntries.map((entry, i) => {
                    return (
                    <a 
                        className={`${entry} 
                        nav-link px-2`} 
                        key={i} href={"#"+entry} 
                        onClick={() => handlePageChange(`${entry}`)}
                        style={currentPage === entry ? styles.link : styles.inactive}

                    >
                        {entry}
                    </a>)
                })
            }
            <div id='dropDown'>
                Portfolio
            </div>
            </section>
        </nav>
    )
}