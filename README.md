# ProworkTech - Landing Page

A modern, responsive landing page designed for ProworkTech. The focus was on creating a premium look and feel using clean CSS, glassmorphism effects, and a smooth user interface.

## Project Highlights

- **Modern UI**: Uses a curated color palette (Green/Dark nuances) and the Outfit font for a professional appearance.
- **Responsive**: Fully optimized for mobile, tablet, and desktop screens.
- **Sections**: Includes a Hero area, Services grid, Video workflow demo, Testimonials, FAQ, and a detailed Footer.

## Tech Stack

Built using **React** (Vite) and **Vanilla CSS**. I chose standard CSS variables for consistent theming and easy maintenance without relying on heavy UI libraries.

## Contact Form Implementation

The Contact Us form is designed to be fully functional and user-friendly.

- **Data Handling**: As per the project requirements, the form successfully captures user input (Name, Email, Phone, Message). Upon submission, the data is structured and outputted via **Console Logging** to simulate a successful API payload transmission.
- **Optimization Strategy**: To effectively handle network latency and prevent spam (e.g., preventing double-sending an OTP), I implemented a loading state. The submit button is immediately disabled on click and remains locked until the simulated process completes.

## How to Run

1. Clone the repo.
2. Run `npm install` to get dependencies.
3. Run `npm run dev` to start the local server.
