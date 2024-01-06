import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState('mp4');
  const [error, setError] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typewriter, setTypewriter] = useState(null); // State for the Typewriter instance

  const navbarTexts = ["r.Gadakh Video Downloader", "Download Videos with r.gadakh Style"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % navbarTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [navbarTexts]);

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
    setError(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleDownloadClick = () => {
    if (videoUrl.trim() === '') {
      setError(true);
      return;
    }

    const decodedUrl = videoUrl;
    const downloadUrl = `http://yt-download.org/api/button/${selectedOption}?url=${decodedUrl}`;
    window.location.href = downloadUrl;
  };

  return (
    <div>
      <Navbar text={navbarTexts[textIndex]} setTypewriter={setTypewriter} />
      <div className="container">
        <input
          type="text"
          placeholder="Enter Youtube URL"
          className={`neon-textbox ${error ? 'error' : ''}`}
          value={videoUrl}
          onChange={handleInputChange}
        />
        <div className="option-buttons">
          <button
            className={`option-button ${selectedOption === 'mp4' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('mp4')}
          >
            MP4
          </button>
          <button
            className={`option-button ${selectedOption === 'mp3' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('mp3')}
          >
            MP3
          </button>
        </div>
        {error && <p className="error-message">Please enter a valid video URL</p>}
        <button className="download-button" onClick={handleDownloadClick}>
          Download
        </button>
      </div>
    </div>
  );
};

const Navbar = ({ text, setTypewriter }) => {
  return (
    <div className="navbar">
      <Typewriter options={{ delay: 75 }} onInit={(typewriter) => {
        setTypewriter(typewriter);
        typewriter.typeString(text).start();
      }} />
    </div>
  );
};


export default App;
