/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Stake's Mine Game (React)",
    description:
      " Developed a fully functional clone of Stake's Mine game using React.js, offering a dynamic user interface built with Tailwind CSS to provide an engaging gaming experience where users strategize tomaximize their rewards while navigating risks.\n"+
      " Implemented mathematical algorithms to dynamically calculate user profit based on the selected risk level,ensuring accurate and real-time updates during gameplay.",
    url: "https://stake-mines-game-react-git-main-rakshits-projects-3b61802b.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Created a weather application using HTML, CSS, JavaScript, and integrated the Weather API, hence usingthe concept of Fetch API, offering users a search functionality to retrieve real-time weather data\n"+
      " The app provides a clean and intuitive UI, displaying essential information such as temperature, wind speed,humidity, and more, ensuring a user-friendly experience",
    url: "https://rakshit412005.github.io/Weather-App/",
  },
  {
    title: "Make My Trip UI/UX",
    description:
      "Developed a UI/UX clone of the popular Make My Trip platform using HTML and CSS, focusing on replicating the aesthetic and functional aspects to enhance user engagement.\n" +
      " Implemented responsive design to ensure seamless user experience across different devices and screen sizes.\n" +
      "Implemented four essential component pages—Flights, Holiday, Homestay, and Hotels—facilitating streamlined navigation and allowing users to explore a wide range of travel options effortlessly.",
    url: "https://rakshit412005.github.io/Make-My-Trip-Clone-UI-UX-/",
  },

  ,
  {
    title: "Currency Convertor (React)",
    description:
      " Developed a dynamic currency converter application using React.js, HTML, Tailwind CSS, and JavaScript, enablingusers to perform quick and accurate conversions between various currencies in real-time and also integrated swap functionality for better user experience.\n"+
      "Tailored the app to meet the needs of travelers and online shoppers, ensuring convenient access to real-time currency information, making it an essential tool for financial decision-making.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This portfolio website is a personal platform designed to showcase my skills, projects, and professional experiences. It features an elegant and responsive user interface, built with HTML for structure, CSS for styling, and Tailwind CSS for rapid UI development.\n" + 
      "  JavaScript adds interactivity to enhance the user experience. The website includes sections such as an About Me page, project showcases, skills, and contact information, providing a comprehensive overview of my capabilities as a web developer",
    url: "https://rakshit412005.github.io/Portfolio_Website/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "This is a simple, yet classic game developed using HTML, CSS, and JavaScript. The game allows two players to compete against each other by taking turns to mark the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.\n" + 
      "   Allows two players to play the game on the same device.Winner Detection: Detects when a player has won the game or if the game ends in a draw. Reset Game: Allows players to reset the game and start a new match. Interactive UI: Engaging and easy-to-use user interface.",
    url: "https://rakshit412005.github.io/Tic-Tac-Toe/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" ,animation: "1s ease-out 0s 1 slideInLeft"}}
            
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
