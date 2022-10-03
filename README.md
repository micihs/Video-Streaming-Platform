# Video-Streaming-Platform

This repository comprised a backend and frontend of a youtube-like video ulpoad and streaming platform.
The backend is built using a PERN stack (Postgres, Express, React, Node).
with primary packages sequalize, jsonwebtoken, bcryptojs.

## Backend Features
1. Login/ Signup
2. Upload video
3. Search video by channel name
4. Search video by title, description
5. Like/ Dislike
6. Subscribe/ Unsubscribe from channels
7. Add Comments
8. Edit profile (avatar photo, cover photo)
9. Liked Video lists
10. History

## Running the backend locally

At the root of the downloaded repositry folder create an .env file with the following contents:

```javascript
JWT_SECRET=<YOUR_SECRET>
JWT_EXPIRE=30d // or any reasonable value that you prefer
DATABASE_URL=<YOUR_DB_CONNECTION_URI>
```
Then run <code>npm i</code> and <code>npm run dev</code> to start the development server.

## Core frontend packages
1. Redux - State management
2. React Router - Routing
3. Styling - Styled Components
4. Toast Notifications - React Toastify
5. Network calls - Axios
6. Video player - Videojs

## Running the frontend locally

At the root of your project create an .env file with the following contents:

```bash
# BE stands for Backend Endpoint
REACT_APP_BE=<YOUR_BACKEND_ENDPOINT> # eg: http://localhost:5000/api/v1
REACT_APP_CLOUDINARY_ENDPOINT=https://api.cloudinary.com/v1_1/<YOUR_CLOUD_NAME>
```

Then run <code>npm i</code> and <code>npm start</code> to see the youtube clone in action
