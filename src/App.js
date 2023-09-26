import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import styled from 'styled-components';
import './App.css';

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
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/" component={AboutMe} />
          </Switch>
        </Content>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
