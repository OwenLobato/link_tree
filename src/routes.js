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
  { path: '/linkTree/:username', component: <LinkTree /> },
];

export const AppRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/edit/:username/profile', component: <Profile /> },
  { path: '/edit/:username/links', component: <Links /> },
];
