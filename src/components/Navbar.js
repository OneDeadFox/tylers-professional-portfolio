import {React, useState} from 'react';
import Dropdown from './Dropdown';
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
    const [dropdown, setDropdown] = useState(0);

    const loadLinks = () => {
        if(dropdown === 1){
            return (<Dropdown/>)
        }
    }

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
                        nav-link px-3`} 
                        key={i} 
                        href={"#"+entry} 
                        onClick={() => handlePageChange(`${entry}`)}
                        style={currentPage === entry ? styles.link : styles.inactive}

                    >
                        {entry}
                    </a>)
                })
            }
            <a 
                id='dropDown' 
                className={`nav-link ps-3 pe-4`}
                href={'#Porfolio'}
                onClick={() => {
                    handlePageChange(`Portfolio`)
                    setDropdown(1);
                    }
                }
                style={currentPage === 'Portfolio' ? styles.link : styles.inactive}
            >
                Portfolio
                {loadLinks()}
            </a>
            </section>
        </nav>
    )
}