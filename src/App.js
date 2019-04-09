import React, { Component } from 'react';
import styled from 'react-emotion'
import 'normalize.css';
import logo from './logo.svg';
import  Navigation from './components/navigation';
import  HeroCarousell from './components/heroCarousell';
import RecentBook from './components/RecentBook';
import FetchBooks  from './components/FetchBooks'

const Section = styled('section')`
  display: grid;
  grid-template-rows: 50px 1fr 1fr;
  height: 100vh;
`
class App extends Component {
  render() {
    return (
      <Section>
        <Navigation/>
        <FetchBooks query='romantic'>{
          ({books}) => <HeroCarousell books={books? books:[]}/>

        }
        </FetchBooks>
        <FetchBooks query='action'>{
          ({books}) => <RecentBook books={books}/>
        }</FetchBooks>
        
      </Section>
    );
  }
}

export default App;
