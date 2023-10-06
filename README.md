# React Course Rating App

This is a basic React application for rating email courses. It allows users to rate courses using a star rating component.

## Project Structure

The project includes the following files and directories:

- `src/`: This directory contains the source code of the React application.

  - `src/components/`: This directory contains React components that make up the app.

    - `Course.js`: This component represents a course and displays its details, including the course name, description, and an integrated star rating component.

    - `Star.js`: This component is responsible for rendering individual stars within the star rating system. It handles star click events and updates the rating.

    - `StarRating.js`: This component manages the star rating system's state and logic. It initializes a rating state, updates the rating when stars are clicked, and allows users to reset their ratings.

  - `src/course-data.js`: This file stores course information, including names, descriptions, and image URLs. The data is used to render the course components.

  - `src/App.js`: The main application component that renders course components based on the data in `course-data.js`.

- `.eslintrc.js`: This file contains the ESLint configuration for the project. It enforces code quality and style rules.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository to your local machine:
   ```bash 
   git clone https://github.com/yourusername/react-course-rating-app.git

1. Change to the project directory:
   ```bash 
   cd react-course-rating-app
2. Install project dependencies:
   ```bash 
   npm install

### Usage
To start a development server, run `npm start` in terminal or command prompt from within root folder of this project.
Open your web browser and visit http://localhost:3000 to see the app in action.

### ESLint Configuration
This project uses ESLint for code linting and follows recommended rules. The ESLint configuration can be found in the .eslintrc.js file.

