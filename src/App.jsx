import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar, Footer, PrivateRoute } from './components/globals';
import { PublicAppRoutes, AppRoutes } from './routes';
import { UserContext } from './contexts/userContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <UserContext>
      <Router>
        <ToastContainer />
        <div className='flex flex-col min-h-screen'>
          <NavBar />
          <Routes>
            {/* PUBLIC ROUTES*/}
            {PublicAppRoutes.map(({ path, component }, index) => (
              <Route key={index} path={path} element={component} />
            ))}
            {/* PRIVATE ROUTES */}
            {AppRoutes.map(({ path, component }, index) => (
              <Route
                key={index}
                path={path}
                element={<PrivateRoute>{component}</PrivateRoute>}
              />
            ))}
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext>
  );
};

export default App;
