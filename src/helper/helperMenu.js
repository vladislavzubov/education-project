import React from 'react';
import { requests } from '../services/requests';

function helperMenu() {
  const [menuAll, setMenuAll] = React.useState();

  const getMenu = async () => {
    try {
      const getAllMenu = await requests('get', 'menu');
      setMenuAll(getAllMenu.data[0]);
      console.log(getAllMenu.data[0]);
    } catch (e) {
      console.log('falied get all categories', e);
      console.log(getAllMenu.data);
    }
    console.log('success get all categories');
  };
  console.log(menuAll);

  React.useEffect(() => {
    getMenu();
  }, []);

  const menuAdmin = [
    {
      value: 'Apps',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: 'http://localhost:3000/probe',
          nesting: [
            {
              value: 'Create category',
              href: 'http://localhost:3000/dashboard/create-category',
            },
            {
              value: 'Create lecture',
              href: 'http://localhost:3000/dashboard/create-lecture',
            },
            {
              value: 'Chart exercise',
              href: 'http://localhost:3000/dashboard/create-exercise',
            },
          ],
        },
        {
          value: 'Categories',
          icon: 'pivot',
          href: 'http://localhost:3000/dashboard/categories',
        },
        {
          value: 'Dashboard',
          icon: 'home',
          href: 'http://localhost:3000/',
        },
        {
          value: 'Change user info',
          icon: 'form',
          href: 'http://localhost:3000/dashboard/change_user_data',
        },
        {
          value: 'Lectures',
          icon: 'send-to-graph',
          href: 'http://localhost:3000/dashboard/lectures',
        },
      ],
    },
  ];
  return menuAdmin;
}

export default helperMenu;
