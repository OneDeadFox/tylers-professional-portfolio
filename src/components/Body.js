import React from 'react';
import ReadableContainer from './ReadableContainer';
import Cards from './Cards';

export default function Body() {
    return (
        <main className={`main row`}>
            <ReadableContainer />
            <Cards />
        </main>
    )
}