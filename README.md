# Personal Portfolio

Welcome to my personal portfolio repository! This project was created to showcase my skills, projects, and a bit about my journey as a developer. The site is fully responsive, hope u like :).

**[Check out the live version here!](https://manuvaladares.github.io/portfolio/)**

## Technologies Used

This project was built using the following technologies:

* **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/)**: A modern build tool that provides a faster development experience.
* **[Styled Components](https://styled-components.com/)**: For component styling, allowing you to write CSS directly in your JavaScript.
* **[React Router](https://reactrouter.com/)**: For managing routes in the application.
* **[React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter)**: For the typewriter effect on the homepage.

## How to Run the Project Locally

Follow the steps below to run the project on your machine.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (version 18 or higher)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ````bash
    git clone https://github.com/manuvaladares/portfolio.git
    ````

2. Navigate to the project directory:
    ````bash
    cd portfolio
    ````

3. Install the dependencies:
    ````bash
    npm install
    ````

### Running

To start the development server, run:
````bash
npm run dev
````
The project will be available at http://localhost:5173.

### Build and Deployment

Build: To generate the production version of the project, run:

````bash
npm run build
````
The optimized files will be created in the dist directory.

Deploy: The project is deployed to GitHub Pages using the gh-pages library. The script can be triggered with:

````bash
npm run deploy
````
### File Structure
The project's file structure is organized as follows:

````plaintext
/
├── public/
├── src/
│   ├── assets/         # Images and other static assets
│   ├── components/     # Reusable components (About, Projects, Header, etc.)
│   ├── pages/          # Main pages of the application (Home)
│   ├── App.jsx         # Main component that defines the layout and routes
│   ├── main.jsx        # Entry point of the React application
│   └── global.css      # Global styles
├── .gitignore          # Files and folders ignored by Git
├── index.html          # Main HTML template
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
````
### License
This project is open-source. Feel free to use it as inspiration for your own portfolio.

