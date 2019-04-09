import React from 'react';
import styled from 'react-emotion'

const Div = styled('div')`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "search logo profile";
    grid-column: 1 /span 3;
    margin-bottom: 1px solid #ddd;
    h3 {
        margin-top: 0;
    }
`;

const Input = styled('input')`
    height: 15px;
`;

const navigation = () => {
    return <Div>
        <Input type="text" placeholder='search'/>
        <h3>Logo</h3>
        <h3>Profile</h3>
    </Div>
}

export default navigation;