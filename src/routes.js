import { Login, Dashboard, Apply } from './components/modules';
import { NotFoundPage } from './components/globals';

export const PublicAppRoutes = [
  { path: '/*', component: <NotFoundPage /> },
  { path: '/', component: <Login /> },
  { path: '/apply', component: <Apply /> },
];

export const AppRoutes = [{ path: '/dashboard', component: <Dashboard /> }];
