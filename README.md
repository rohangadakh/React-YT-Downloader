# Youtube Video Downloader
This GitHub repository contains a React application for a video downloader with a typewriter-style navbar.

**Components:**  

**App Component:**  
  
**State variables:**    
    **videoUrl:** Holds the YouTube video URL entered by the user.    
    **selectedOption:** Tracks the selected download option ('mp4' or 'mp3').
    **error:** Manages the error state for invalid inputs.    
    **textIndex:** Index to rotate through different texts in the navbar.  
    **typewriter:** State to store the Typewriter instance for dynamic updates.  
    **navbarTexts:** Array of texts to display in the rotating navbar.  
    **useEffect:** Rotates through navbar texts at a 2-second interval.  
  
**Event handlers:**  
    **handleInputChange:** Updates videoUrl on input change and resets the error state.
    **handleOptionClick:** Updates the selected download option.
    **handleDownloadClick:** Initiates the video download process by constructing the download URL and redirecting the user.

**Navbar Component:**

Receives the current text and the **setTypewriter** function as props.
Utilizes the Typewriter component from the **'typewriter-effect'** library.
Initializes the typewriter with a 75ms delay and starts typing the provided text.

**Additional Details:**
The navbar displays changing texts related to the video downloader using the **Typewriter** effect.
The user can input a YouTube video URL in a neon-styled textbox.
Two option buttons ('MP4' and 'MP3') allow the user to choose the desired video format.
Error handling is implemented to notify the user if the input video URL is empty.
The download button triggers the download process with the chosen options.

**Dependencies:**

**React**
**'typewriter-effect':** A library for creating a typing effect in the navbar.

**Usage:**
To use this application, users can clone the repository, install dependencies, and run the React app.
<pre>
  git clone <repository-url>
  cd <repository-folder>
  npm install
  npm start
</pre>
