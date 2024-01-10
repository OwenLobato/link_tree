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
  ![LogIn](...)

- **Apply**: [Screenshot of the Apply form].  
  ![Apply](...)

- **Page Not Found**: [Screenshot of the notice indicating that the selected route doesn't exist].  
  ![PageNotFound](...)

- **Logged nav bar**: [Screenshot of the navbar when user is logged].  
  ![LoggedNavBar](...)

- **No logged nav bar**: [Screenshot of the navbar when user is not logged].  
  ![NoLoggedNavBar](...)

- **Dashboard**: [Screenshot of the user dashboard].  
  ![Dashboard](...)

- **Edit links**: [Screenshot of the links edition].  
  ![EditLinks](...)

- **Edit profile**: [Screenshot of the profile edition].  
  ![EditProfile](...)

- **Full link tree**: [Screenshot of the user link tree with data].  
  ![FullLinkTree](...)

- **Empty link tree**: [Screenshot of the user link tree without data].  
  ![EmptyLinkTree](...)
