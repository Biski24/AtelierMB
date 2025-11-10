# Coiffeur Berre Website

Welcome to the Coiffeur Berre website project! This project is designed for a hairdresser located in Berre-l'Étang, providing an online platform for customers to view services, leave reviews, and book appointments.

## Features

- **Customer Reviews**: Customers can submit their reviews and read feedback from others.
- **Appointment Scheduling**: Customers can book appointments from Tuesday to Saturday, between 9 AM and 7 PM.
- **Service Listings**: A detailed list of services offered by the hairdresser, including descriptions and prices.
- **Contact Form**: A form for customers to reach out with inquiries or feedback.

## Project Structure

The project is organized into a frontend and backend structure:

- **Frontend**: Contains all the React components, pages, and styles.
  - `src/frontend/pages`: Main pages of the website.
  - `src/frontend/components`: Reusable components like Header and Footer.
  - `src/frontend/features`: Specific features like Reviews and Appointments.
  - `src/frontend/styles`: CSS styles for the website.

- **Backend**: Handles API requests and database interactions.
  - `src/backend/controllers`: Logic for handling reviews and appointments.
  - `src/backend/routes`: API route definitions.
  - `src/backend/models`: Database models for reviews and appointments.
  - `src/backend/db`: Database connection and configuration.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd coiffeur-berre-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

5. Start the backend server:
   ```
   npm run start:backend
   ```

6. Start the frontend development server:
   ```
   npm run start:frontend
   ```

## Technologies Used

- React for the frontend
- Node.js and Express for the backend
- MongoDB for the database (or any other database of your choice)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.