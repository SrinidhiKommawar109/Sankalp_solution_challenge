import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Define the function inside useEffect
    window.initializeGoogleTranslate = () => {
      if (window.google) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          "google_translate_element"
        );
      }
    };

    const loadGoogleTranslateScript = () => {
      if (!document.querySelector("script[src*='translate.google.com']")) {
        const script = document.createElement("script");
        script.src = "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.initializeGoogleTranslate(); // If script exists, initialize the widget
      }
    };

    loadGoogleTranslateScript();
  }, []);

  // Speech recognition
  const startVoiceSearch = () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US'; // Always use English language for voice search
      recognition.start();

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        highlightOrRedirect(transcript); // Check and highlight or redirect
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error); // Log the error for debugging
        alert('An error occurred with the speech recognition. Please try again.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    } else {
      alert('Your browser does not support speech recognition');
    }
  };

  // Function to highlight or redirect based on recognized text
  const highlightOrRedirect = (query) => {
    const wordsToHighlight = ['Home', 'About', 'Schemes', 'Funding', 'Opportunities', 'Handson'];
    const lowerQuery = query.toLowerCase();

    // Check if the query matches any page name and redirect if it matches
    if (wordsToHighlight.some(word => lowerQuery.includes(word.toLowerCase()))) {
      const matchedPage = wordsToHighlight.find(word => lowerQuery.includes(word.toLowerCase()));
      window.location.href = `/${matchedPage.toLowerCase()}`;
    } else {
      // If no match, alert the user
      alert(`No matching page found for "${query}"`);
    }
  };

  return (
    <header>
      <h1>Sankalp</h1>
      <nav>
        <a href="/">Home</a>
        <div
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="/about" className="dropdown-toggle">About</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/history">History</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/faq's">FAQ's</a></li>
              <li><a href="/support">Help & Support</a></li>
            </ul>
          )}
        </div>
        <a href="/schemes">Schemes</a>
        <a href="/funding">Funding</a>
        <a href="/oppurtunities">Opportunities</a>
        <a href="/handson">Hands-on Service</a>

        {/* Google Translate Dropdown */}
        <div id="google_translate_element" className="translate-box"></div>

        {/* Voice Search Button */}
        <div className="voice-search" onClick={startVoiceSearch}>
          <button className={`voice-search-button ${isListening ? 'listening' : ''}`}>
            🎤
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
