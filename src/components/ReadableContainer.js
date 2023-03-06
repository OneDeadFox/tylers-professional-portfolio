import {React, useState} from 'react';
import Navbar from './Navbar';
import Bio from './pages/Bio';
import
import ReadableContainer from './ReadableContainer';
import Cards from './Cards';

export default function Body() {
    //set up useState for conditional rendering
    const [currentPage, setCurrentPage] = useState('Bio')

    return (
        <main className={`main row`}>
            <ReadableContainer />
            <Cards />
        </main>
    )
}