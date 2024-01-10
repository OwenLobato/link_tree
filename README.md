# Link Tree App

This is a web application developed in a MERN stack (MongoDB, Express.js, React.js, Node.js) that provides a platform to manage and share links to your social media profiles and other external resources. It features basic authentication, protected routes, authorization, and a system for managing profiles and links.

## Key Features

- **Authentication and authorization**: The application includes a simple authentication system that allows users to log in and access protected routes. Authorization is implemented to ensure each user has access only to manage their own links and data.

- **Personalized dashboard**: Upon logging in, users are redirected to a dashboard displaying a list of registered links and links to associated social media profiles.

- **Link editing**: Users can edit their links by adding a title, URL, and a text-based image (linked to the image URL). While dynamic image loading is not implemented on the server, images can be included using static image paths.

- **User profile**: The application provides a section for users to manage their profiles, including details such as name, bio, profile picture, and links to their social media profiles.

- **Dynamic navbar**: Navigation in the application is managed through a context that controls the navigation bar, adapting based on the user's current route.

- **Responsive design with Tailwind CSS**: The user interface is developed using Tailwind CSS, ensuring an attractive and responsive design that adapts to different devices.

## Project Structure

### Public

- **Images**: Images in any format.
- **Svgs**: SVG files for the app.

### Server

- **Components**: Entities in the system are handled in this section, structured with Network (endpoint and response), Controller (application logic), and Store (database logic).
- **Config**: Configuration files for the server are stored in this section.
- **Middlewares**: Middleware functions are included for verifying user authentication.
- **Models**: Database models and schemas are defined using Mongoose in this section.
- **Network**: This part is responsible for managing server routes and responses.
- **Utils**: It contains useful functions, such as customizing the Error class.

### Client

- **App.jsx**: Configures public and private routes using React Router.
- **Components**: Application components are organized here, with global components being more generic and module-specific components categorized by section, such as Auth and Users.
- **Contexts**: This section manages context providers that facilitate the sharing and management of global state across React components.
- **Hooks**: Custom hooks are provided, including the use of the `utils/requests.js` function, an abstract component for making Axios requests, and custom hooks like `useAuth` that simplify and generalize requests.
- **Styles**: Global Tailwind styles and specific file styles are located here.

## Environment Variables

Both the client and server utilize `.env` files to manage environment variables. This approach streamlines configuration for various environments.

### Server .env

```bash
NODE_ENV=
PORT=
API_VERSION=
MONGODB_URI=
ORIGIN=
PRODUCTION_ORIGIN=
URL_PRODUCTION=
JWT_SECRET_KEY=
```

### Client .env

```bash
REACT_APP_NODE_ENV=
REACT_APP_PORT=
REACT_APP_API_VERSION=
REACT_APP_AUTH_VERSION=
REACT_APP_API_URL=
REACT_APP_API_URL_PRODUCTION=
REACT_APP_URL=
REACT_APP_URL_PRODUCTION=
```

## How to run the project

### Running the Server

From the root directory of the project, you can launch the server with the following command:

```bash
npm run start-server
```

This command takes you to the "server" directory, installs dependencies if not already done, and starts the server using "nodemon."

### Running the Client

To run the client, navigate to the project's root directory and execute the following command:

```bash
npm run start-client
```

This command installs client dependencies if not already installed and launches the React application using "react-scripts."

Ensure that both the server and client are operational to use the application effectively.

## Production Deployment

The project is currently deployed on [Render.com](https://dashboard.render.com/) for both the front end (client) and back end (server).

### Front End (Client)

The deployed front end is accessible at: [https://link-tree-ad0v.onrender.com](https://link-tree-ad0v.onrender.com)

### Back End (Server)

The deployed back end is accessible at: [https://link-tree-api.onrender.com](https://link-tree-api.onrender.com)

## Screen Examples

- **LogIn**: [Screenshot of the LogIn form].  
  ![LogIn](https://github.com/OwenLobato/link_tree/assets/74989360/d184ed61-f973-4fab-acac-788d2a6320e5)
  ![Responsive LogIn](https://github.com/OwenLobato/link_tree/assets/74989360/b1e00548-7dd9-4d0d-ab07-b69d15b0836a)

- **Apply**: [Screenshot of the Apply form].  
  ![Apply](https://github.com/OwenLobato/link_tree/assets/74989360/861ee873-c45e-4b6d-b3f0-7e081344c055)
  ![Responsive Apply](https://github.com/OwenLobato/link_tree/assets/74989360/20998a52-da09-4f18-a341-4e3cf7d76c45)

- **Page Not Found**: [Screenshot of the notice indicating that the selected route doesn't exist].  
  ![PageNotFound](https://github.com/OwenLobato/link_tree/assets/74989360/564ac897-7504-43ee-8529-7bc99167a228)
  ![Responsive PageNotFound](https://github.com/OwenLobato/link_tree/assets/74989360/a0f902c2-a3bb-488c-90f8-4fcaf121a0b4)

- **Logged nav bar**: [Screenshot of the navbar when user is logged].  
  ![LoggedNavBar](https://github.com/OwenLobato/link_tree/assets/74989360/0bde6425-fc3a-469a-82cd-faad03e70cdd)
  ![Responsive LoggedNavBar](https://github.com/OwenLobato/link_tree/assets/74989360/e120e6e4-960e-4175-b97d-db23cc148a67)

- **No logged nav bar**: [Screenshot of the navbar when user is not logged].  
  ![NoLoggedNavBar](https://github.com/OwenLobato/link_tree/assets/74989360/c8d3773c-4da8-488e-a823-c52c64a53343)
  ![Responsive NoLoggedNavBar](https://github.com/OwenLobato/link_tree/assets/74989360/0d2b095c-764a-4d59-acf8-ece04e784602)

- **Dashboard**: [Screenshot of the user dashboard].  
  ![Dashboard](https://github.com/OwenLobato/link_tree/assets/74989360/cf0bcb29-73a5-4a0e-9778-32652d72c974)
  ![Responsive Dashboard](https://github.com/OwenLobato/link_tree/assets/74989360/79a42808-7f43-40bc-8e76-73563b4912f3)

- **Edit links**: [Screenshot of the links edition].  
  ![EditLinks](https://github.com/OwenLobato/link_tree/assets/74989360/b156e1b5-9ccc-4e6c-8d0f-cd09250ed367)
  ![Responsive EditLinks](https://github.com/OwenLobato/link_tree/assets/74989360/301015a4-b6d2-48cb-8148-ff19cd7ffa6a)

- **Edit profile**: [Screenshot of the profile edition].  
  ![EditProfile](https://github.com/OwenLobato/link_tree/assets/74989360/8f976081-7aca-4fb1-8a97-fdc901a0a78e)
  ![Responsive EditProfile](https://github.com/OwenLobato/link_tree/assets/74989360/f7268d43-67a9-4a2a-b41c-7deb841def3b)

- **Full link tree**: [Screenshot of the user link tree with data].  
  ![FullLinkTree](https://github.com/OwenLobato/link_tree/assets/74989360/d026c523-2a89-4289-aa6b-02e7fda4a817)
  ![Responsive FullLinkTree](https://github.com/OwenLobato/link_tree/assets/74989360/321c6c9b-782e-4957-a5fa-c703c17017b4)

- **Empty link tree**: [Screenshot of the user link tree without data].  
  ![EmptyLinkTree](https://github.com/OwenLobato/link_tree/assets/74989360/8caabb4c-1671-4710-925e-fe74ef0e57f8)
  ![Responsive EmptyLinkTree](https://github.com/OwenLobato/link_tree/assets/74989360/bf211d58-06fb-4d18-8947-6dd7e0788232)


