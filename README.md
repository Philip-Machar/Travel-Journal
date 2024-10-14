# My Travel Journal

A React-based travel journal application that showcases various travel destinations with details and images.

![My Travel Journal Screenshot](/public/images/travel-journal.png)

[Live Demo](your-live-demo-url-here)

## Description

This project is a digital travel journal built with React. It displays a series of travel destinations, each with its own image, location, date range, and description. The application demonstrates the use of React components, props, and responsive design with Tailwind CSS.

## Features

- Responsive header with a globe icon and title
- Series of travel destination cards
- Each card includes:
  - Destination image
  - Location with icon
  - Google Maps link
  - Title of the destination
  - Date range of the visit
  - Brief description
- Divider between cards for clear separation

## Technologies Used

- React
- Tailwind CSS
- JavaScript (ES6+)
- React Icons

## Project Structure

- `App.jsx`: The main component that renders Header and Card components
- `Header.jsx`: Contains the application header with title and globe icon
- `Card.jsx`: Reusable component for each travel destination
- `data.js`: Contains the data for travel destinations (not shown in the provided files)

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

## How it Works

The app renders a series of Card components based on data imported from `data.js`. Each card displays information about a travel destination, including an image, location, dates, and a brief description. The cards are separated by a horizontal line, except for the last card.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](your-repo-issues-url-here) if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)

