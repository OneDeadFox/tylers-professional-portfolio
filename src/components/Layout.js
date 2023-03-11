import {React, useState, useEffect} from 'react';
import Navbar from './Navbar';
import Bio from './pages/Bio';
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Cards from './Cards';
import Footer from './Footer';

const getIsMobile = () => window.innerWidth <=768

export default function Lauout() {
  //set up useState functionality to change sidebar pages
  const [currentPage, setCurrentPage] = useState('Bio')
  const handlePageChange = (page) => setCurrentPage(page);
  //set up useState for window resizing
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    }
    window.addEventListener('resize', onResize);

    //cleanup event listener
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);
  
//console.log(isMobile)

  const renderPage = () => {
    if(currentPage === `Bio`) {
      return (
          <Bio isMobile={isMobile}/>
      )
  }else if(currentPage === 'Contact') {
      return (
          <Contact isMobile={isMobile}/>
      )
  }else if(currentPage === 'Resume') {
      return (
          <Resume isMobile={isMobile}/>
      )
  }else if(currentPage === 'Portfolio'){
      return (
        <Bio />
    )
  }
  }

  const pageBreak = () => {
    //set var for adjusting column size based on current page
    let colSize = 8;

    if(getIsMobile()){
      //isMobile = true
      return (
        <main className={`main`}>
            <Cards colSize={colSize} isMobile={isMobile}/>
            {renderPage()}
        </main>
      )
    } else {


      if(currentPage === `Resume`) {
        colSize = 6;
      }

      return (        
        <main className={`main d-flex`}>
            {renderPage()}
            <Cards colSize={colSize}/>
        </main>
      )
    }
  }

  return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {pageBreak()}
        <Footer />
    </div>
  );
}


