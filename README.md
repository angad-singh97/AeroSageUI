# AeroSage UI

**Overview:**
This standalone project serves as the front-end module of the AeroSage web-application, that is a part of the two-part Full-Stack project in Java and React.

Built using ReactJS, this component provides the user interface for the homepage, airport overview, flight search and blogpost pages. It makes use of React Router to handle page navigation without refreshing the page. Calls to the Spring Boot backend are made using Axios.

**How It Works:**

The goal of this project was to understand how a ReactJS project is structured and makes use of reusable UI components to deliver a lightweight and seamless development experience. Each of the UI components have been logically structured to be available for use anywhere within the application context. I have also explored the integration of action-based animations to make the user experience more visually intuitive.

The UI components here are primarily modeled in HTML and CSS, using the flexbox and grid models extensively for styling. Asynchronous backend calls are back through the Axios dependency with a wait animation during the flight search action. The look and feel is inspired by a Windows-8 like minimal, tile-based design language.

This project is a work-in-progress.
