import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

const styles = {
  root: {
    color: "black",
    fontFamily: "GT Walsheim, GT Walsheim, sans-serif",
    fontSize: "1.25em"
  }
}

export default function App() {
  return (
    <div className="App" style={styles.root}>
        <Navbar />
        <Body />
        <Footer />
    </div>
  );
}


