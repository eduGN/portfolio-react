
import React, {useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import MainHome from './components/main-home/MainHome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };
  const scrollTop=()=>{
    window.scroll({top:0 ,behavior:'smooth'})
}
window.addEventListener('scroll', checkScrollTop)

  return (
    <div className="app-container">
      
       <MainHome />
        <div className="btn-arrow" style={{visibility:showScroll?'visible':'hidden', opacity:showScroll?'1':'0'}}>
        <Button onClick={scrollTop} buttonSize="btn-square" buttonStyle="btn-scrollup"><FontAwesomeIcon icon={faAngleDoubleUp}/></Button>
        </div>
    </div>
  );
}

export default App;
