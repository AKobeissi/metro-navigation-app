import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EnterOrLeave.css';
import BottomNavBar from './BottomNavBar';

function EnterOrLeave() {
  const location = useLocation();
  const navigate = useNavigate();
  const { stationName, stationLine, destination } = location.state || {};
  const [isSpeaking, setIsSpeaking] = useState(false);
  //const { station } = location.state || {};

  const getInitialSpeechText = () => {
    return `You have selected ${stationName} station. Are you entering or leaving the metro?`;
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    } else {
      console.log("Text-to-speech not supported in this browser.");
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speak(getInitialSpeechText());
    }
  };

 const handleChoice = (choice) => {
    const choiceText = `You have chosen ${choice} the metro at ${stationName} station. Navigating to instructions.`;
    speak(choiceText);
    
    // Wait for the speech to finish before navigating
    setTimeout(() => {
      navigate('/navigation', { 
        state: { 
          stationName, 
          stationLine,
          destination,
          choice 
        } 
      });
    }, 7000); // Adjust this delay as needed
  };

  //working version
//  const handleChoice = (choice) => {
  //  navigate('/navigation', { 
   //   state: { 
   //     stationName, 
   //     stationLine,
    //    destination,
    //    choice 
   //   } 
   // });
 // };

  //const handleChoice = (choice) => {
  //  if (choice === 'entering') {
  //    navigate('/navigation', { 
  //      state: { 
  //        station: station?.name 
  //      } 
  //    });
  //  } else {
      // Handle 'leaving' choice if needed
  //    console.log('Leaving option selected');
  //  }
  //};

  //const handleChoice = (choice) => {
   // if (choice === 'entering') {
    // Navigate to the next step (not implemented in this example)
    //  navigate('/navigation', { state: { station, choice } });
  //};

  useEffect(() => {
    // Automatically start speaking when the component mounts
    speak(getInitialSpeechText());

    // Cleanup function to stop speaking when the component unmounts
    return () => {
      speechSynthesis.cancel();
    };
  }, []);


  return (
    <div className="EnterOrLeave">
      <h2>Are you entering or leaving the metro?</h2>
      <p>Selected station: {stationName}</p>
      <p>Line: {stationLine}</p>
      <p>Destination: {destination}</p>
      <button className="button enter" onClick={() => handleChoice('entering')}>Entering</button>
      <button className="button leave" onClick={() => handleChoice('leaving')}>Leaving</button>
      <div className="audio-controls">
        <button onClick={toggleSpeech}>
          {isSpeaking ? 'Stop Audio' : 'Replay Audio'}
        </button>
      </div>
      <BottomNavBar />
    </div>
  );
}

 // return (
 //   <div className="EnterOrLeave">
 //     <h2>Are you entering or leaving the metro?</h2>
 //     <p>Selected station: {stationName}</p>
 //     <p>Line: {stationLine}</p>
 //     <p>Destination: {destination}</p>
 //     <button className="button enter" onClick={() => handleChoice('entering')}>Entering</button>
 //     <button className="button leave" onClick={() => handleChoice('leaving')}>Leaving</button>
 //     <BottomNavBar />
 //   </div>
 // );
//}

 // return (
  //  <div className="EnterOrLeave">
   //   <h2>Are you entering or leaving the metro?</h2>
    //  <p>Selected station: {station}</p>
    //  <button className="button enter" onClick={() => handleChoice('entering')}>Entering</button>
     // <button className="button leave" onClick={() => handleChoice('leaving')}>Leaving</button>
     // <BottomNavBar />
    //</div>
 // );/
//}

export default EnterOrLeave;