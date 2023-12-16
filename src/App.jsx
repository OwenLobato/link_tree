import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/globals';
import { PublicAppRoutes, AppRoutes } from './routes';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;