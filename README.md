# Event Listener
### Video Demo:  <https://youtu.be/TWS53SVLLX8>
### Description:Building Event Listener (Chrome Extension)

Hello everyone, my name is Sewell, and I'm excited to present to you my final project for CS50. Today, I'll be showcasing my Chrome extension called "Event Listener" and sharing with you the journey of its creation.

#### Overview

First, let's start with an overview of the project. Event Listen is a Chrome extension designed to help users find local events in their area being that concerts, sporting events, or theatre events. It utilizes the SeatGeek API to fetch event data and display it in a visually pleasing interface directly within the Chrome browser. I took it upon myself to look into the Seatgeek affiliate program and signed up for a partner account that way if anyone uses my extension to direct them a local event on seatgeek, that i would get paid a commsion for connecting that customer to that sale, which is pretty cool when you think about how you can create and build things and get some passive income from it.

#### Development Process

Now, let's dive into the development process. I began by setting up the project structure, including the necessary files such as index.html, script.js, styles.css, and manifest.json. The manifest.json file contains essential metadata about the extension, including its name, version, description, and permissions.

Next, I implemented the frontend functionality using HTML, CSS, and JavaScript. The index.html file contains the user interface elements, including a form for users to input their location, event category, and date range. The form data is then processed by the script.js file, which makes AJAX requests to the SeatGeek API, fetches event data based on the user's input, and dynamically generates HTML elements to display the events.

#### Obstacles and Errors I Had To Overcome

During development, I encountered several errors, one of which was a Content Security Policy (CSP) violation. This error occurred because the browser blocked the use of 'unsafe-eval' in the setTimeout function. To fix this, I modified the code to pass a function reference directly to setTimeout, eliminating the need for 'unsafe-eval'.

Another error I encountered was a syntax error in the manifest.json file, which resulted in the extension failing to load. This error was caused by an extra closing brace at the end of the web_accessible_resources definition. I removed the extra brace to resolve the issue.

Additionally, I faced challenges in styling the extension to match the theme of SeatGeek. I used CSS to customize the appearance, including colors, fonts, and button styles, to closely resemble the SeatGeek website.
The last somewhat hump i had was constructing the carousel in javascript. i had problems with the first iteration i tried to make by using the unsplash api to incorporate random images based off the search query keywords of 'Sports, Concerts, theatre'. This Js code ended up clashing with my other components of my js script, so i created a seperate carousel.js script that implemented a simple 11 image sliding carousel with a time duration to 10 seconds using 11 static images i used from unsplash(royalty free of course). I found this a much simplier fix to the carousel than the more complex version i thought of before.

After overcoming these challenges, I successfully completed the development of the Event Listener Chrome extension. It is now fully functional, allowing users to discover and explore local events with ease. I also utilized looka.com to create a professional logo for the extension using generative Ai and some simple editing tools on their platform.(show Logo). Very simple but stands out , matches the tone of the extension as far as styling, and has a bold and resonating slogan that i made with the help of chatgpt3.5!

#### Thanks and Credentials

Thank you for joining me on this journey of creating Event Listener. If you're interested in trying out the extension, you can find the link to the GitHub repository in the description below as well as all the code used in creating this project. Happy event hunting!

GitHub: https://github.com/Smills731
Email: Designsbywellz@gmail.com
Durham, NC USA
Date: 05/13/2024
GitHub Repository Link: https://github.com/Smills731/EventListener
