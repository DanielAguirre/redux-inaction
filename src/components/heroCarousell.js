import React from 'react';
import styled from 'react-emotion'
import ReleasedBooks from './BookCard';

const Section= styled('section')`
    display: grid;
    grid-column: 1 / span 3;

`;

const H3= styled('h3')`
    margin-top: 0;
    margin-bottom: 0;
`;

const heroCarousell = () => {    
    return <Section>
        <H3>For You</H3>
        <ReleasedBooks />
    </Section>
}

export default heroCarousell;