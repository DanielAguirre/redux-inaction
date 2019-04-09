import React from 'react';
import styled from 'react-emotion';
import cover from '../end_of_watch.gif';

const Section= styled('section')`
    display: grid;
    overflow:hidden;
    grid-template-rows: 45px 900px;
    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const SectionBook= styled('section')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 10px 10px;
    height: 250px;
    overflow:hidden;
    
`;
const Div = styled('div')`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 39% 60%;
    grid-template-areas: "cover details";
    background-color: #9BDAF9;
    border-radius: 5px;
    padding-left: 10px;
    img {
        width: 45px;
        height: 75px;
        grid-area: cover;
        border-radius: 5px;
        box-shadow: 0px 1px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
}`;


const RecentBook = () => {
    return(
        <Section>
            <h3>Browse</h3>
            <SectionBook>
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
            </SectionBook>
        </Section>
    )
}

export default RecentBook;