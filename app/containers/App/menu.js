import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

// Components
import DashboardPage from 'containers/Pages/DashboardPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SchedulePage from 'containers/Pages/Schedule/Loadable';

// Menu tree
const Menu = [
  {
    id: 'dashboard',
    text: 'In-Progress',
    icon: <Icon>schedule</Icon>,
    url: '/',
    component: DashboardPage,
  },
  {
    id: 'prospects',
    text: 'Prospects',
    icon: <Icon>assignmentind</Icon>,
    url: '/',
    component: DashboardPage,
  },
  {
    id: 'ready-to-close',
    text: 'Ready to Close',
    icon: <Icon>assessment</Icon>,
    url: '/',
    component: DashboardPage,
  },
  {
    id: 'sold',
    text: 'Sold/Closed',
    icon: <Icon>house</Icon>,
    url: '/',
    component: DashboardPage,
  },
  {
    id: 'customers',
    text: 'Customers',
    icon: <Icon>people</Icon>,
    url: '/',
    component: DashboardPage,
  },
  {
    id: 'schedule',
    text: 'Schedule',
    icon: <Icon>today</Icon>,
    url: '/schedule',
    component: SchedulePage,
  },
  {
    id: 'storage',
    text: 'Employees',
    icon: <Icon>manager</Icon>,
    url: '/',
    component: DashboardPage,
  },
];

// Asign index and parent fields for each item, which is needed for header tabs navigation
let index = 0;

Menu.map(item => {
  const menuItem = item;
  menuItem.index = index;
  index += 1;
  if (menuItem.children) {
    menuItem.children.map(child => {
      const childItem = child;

      childItem.index = index;
      childItem.parent = {
        id: childItem.id,
        parentId: menuItem.id,
        parentText: menuItem.text,
      };
      index += 1;

      return child;
    });
  }
  return item;
});

// Routes
const getRoute = item => (
  <Route key={item.id} exact path={item.url} component={item.component} />
);

const Routes = (location, dynamicMenu) => {
  const menu = dynamicMenu || Menu;
  return (
    <Switch key={location.key} location={location}>
      {menu.map(item =>
        !item.children
          ? getRoute(item)
          : item.children.map(child => getRoute(child)),
      )}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export { Menu, Routes };
