import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import styled from 'styled-components';
import './App.css'; // Any global styling should go here

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <AboutMe />
            </Route>
          </Switch>
        </Content>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
