# Simple Full Stack User Profile Display

A simple full-stack web application that displays a list of user profiles.

## Features

- Displays user names, email addresses, and short bios.
- Uses a PHP API to provide static user data in JSON format.
- Fetches and renders users dynamically using JavaScript.
- Responsive layout using HTML and CSS.
- Handles API errors and empty results.

## Technologies

- HTML5
- CSS3
- JavaScript
- PHP
- JSON

## Project Structure

user-profile-project/
├── api/
│   └── users.php
├── index.html
├── style.css
├── script.js
└── README.md
## How to Run Locally

1. Install XAMPP.
2. Copy the project folder into the XAMPP htdocs directory.
3. Start Apache from the XAMPP Control Panel.
4. Open the following URL in your browser:

   http://localhost/user-profile-project/

## API Endpoint

The API returns the static user data in JSON format:

http://localhost/user-profile-project/api/users.php