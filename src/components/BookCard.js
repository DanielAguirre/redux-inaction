import React from 'react';
import styled from 'react-emotion'
import cover from '../end_of_watch.gif'

const Section  = styled('section')`
    display:grid;
    grid-template-columns: repeat(3, 35%);
    grid-column: 1 / span 3;

    grid-gap: 20px;
    height: 180px;
    overflow:hidden;
`;

const Div = styled('div')`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 39% 60%;
    grid-template-areas: "cover details";
    background-color: #9BDAF9;
    border-radius: 5px;
    padding-top: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    img {
        width: 90px;
        height: 135px;
        grid-area: cover;
        border-radius: 5px;
        box-shadow: 0px 1px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
}`;


const BookCard = () => {
    return(
        <Section>
            <Div>
                <img src={cover} alt=""/>
                <div>
                    <h3>End of Watch</h3>
                    <h4>by Sthepehn King</h4>
                    <div>Stars</div>
                </div>
            </Div>
            <Div>
                <img src={cover} alt=""/>
                <div>
                    <h3>End of Watch</h3>
                    <h4>by Sthepehn King</h4>
                    <div>Stars</div>
                </div>
            </Div>
            <Div>
                <img src={cover} alt=""/>
                <div>
                    <h3>End of Watch</h3>
                    <h4>by Sthepehn King</h4>
                    <div>Stars</div>
                </div>
            </Div>
        </Section>
    )
}

export default BookCard;