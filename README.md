# Blog-Application

# Blog-It

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/ayush-oswal/Blog-It.svg)](https://github.com/ayush-oswal/Blog-It/issues)
[![GitHub stars](https://img.shields.io/github/stars/ayush-oswal/Blog-It.svg)](https://github.com/ayush-oswal/Blog-It/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ayush-oswal/Blog-It.svg)](https://github.com/ayush-oswal/Blog-It/network)

Blog-It is a MERN (MongoDB, Express.js, React, Node.js) stack application that empowers users to create, view, and search for blog posts. It incorporates robust user authentication using bcrypt, JWT, and cookies, allowing users to log in, register, and engage with the community through comments. Only the author of a post has the authority to update or delete it.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [User Authentication](#user-authentication)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up Blog-It locally, follow these comprehensive steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aman090304/Blog-Application
   cd Blog-Application `

1.  Install dependencies for both the client and server:

    -   Navigate to the `client` directory and install client dependencies:


        `cd client
        npm install`

    -   Move back to the root directory and install server dependencies:


        `cd ..
        cd server
        npm install`


2.  Run the application:

    -   In the `client` directory:


        `cd client
        npm start`

    -   In the `server` directory:


        `cd ..
        cd start
        node app.js`

3.  Access the application:

    -   Open your browser and navigate to `http://localhost:3000` to view the Blog-application.

This setup process covers cloning the repository, installing dependencies. Make sure to follow each step carefully to ensure a smooth installation process. If you encounter any issues, refer to the documentation or seek help from the community.


# Contributing


Contributions are welcome! Here's how you can contribute to Blog-It:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature`.
3.  Make your changes and commit them: `git commit -m 'Add new feature'`.
4.  Push to your branch: `git push origin feature/your-feature`.
5.  Submit a pull request.

Please ensure that your pull request adheres to the contributing guidelines.

License
-------

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.
