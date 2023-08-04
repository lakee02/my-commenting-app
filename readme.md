# Commenting App Backend

This is the backend server for the Commenting App, a web application that allows users to post and view comments.

## Note
development of the frontend for this application is not included in this repository. This backend API has been developed and deployed on a platform.
link : https://my-commenting-app-l1.onrender.com
## Features

- User authentication and authorization
- Create, read, update, and delete comments
- Nested comments for better discussion
- Pagination for comment listing

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- Authentication (e.g., JWT, OAuth)
- RESTful API design

## Getting Started

Since this repository only contains the backend code, you can use this API by making HTTP requests to the deployed server.

## API Endpoints

- **POST /api/auth/signup**: Create a new user account.
- **POST /api/auth/login**: Log in with an existing user account.
- **GET /api/comments**: Get a list of comments with pagination support.
- **GET /api/comments/:commentId**: Get details of a specific comment.
- **POST /api/comments**: Create a new comment.
- **PUT /api/comments/:commentId**: Update an existing comment.
- **DELETE /api/comments/:commentId**: Delete a comment.
- **POST /api/comments/:commentId/reply**: Reply to a comment.

Refer to the API documentation for more details on request and response formats.

## Authentication and Authorization

User authentication is implemented using JSON Web Tokens (JWT). Only authenticated users can create, update, or delete comments. Make sure to include the JWT token in the request headers for protected routes.


