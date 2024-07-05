# Random Jokes and Images API
- This Node.js application serves as an API for fetching random jokes and images. It utilizes Express.js for routing and Axios for making HTTP requests to fetch random images.

# Features
- Random Jokes Endpoint: Fetches a random joke.
- Random Images Endpoint: Fetches a random image URL.
- Combined Jokes and Images Endpoint: Fetches a random joke along with a random image URL in a single response.

# Usage
Once the server is running, you can access the API endpoints using tools like Postman or curl:

- GET /api/jokes/random: Fetches a random joke.
- GET /api/images/random: Fetches a random image URL.
- GET /api/jokes-images/random: Fetches a random joke and a random image URL in a single response.

# Dependencies
- Express: Minimal and flexible Node.js web application framework.
- Axios: Promise-based HTTP client for Node.js.
- Nodemon (dev): Utility that monitors changes in your source and automatically restarts your server.
