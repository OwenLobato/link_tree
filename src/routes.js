import {
  Login,
  Dashboard,
  Apply,
  LinkTree,
  Profile,
  Links,
} from './components/modules';
import { NotFoundPage } from './components/globals';

export const PublicAppRoutes = [
  { path: '/*', component: <NotFoundPage /> },
  { path: '/', component: <Login /> },
  { path: '/apply', component: <Apply /> },
];

export const AppRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/linkTree/:username', component: <LinkTree /> },
  { path: '/edit/profile', component: <Profile /> },
  { path: '/edit/links', component: <Links /> },
];
