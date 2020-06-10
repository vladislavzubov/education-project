export default function helperMenu() {
  const menuAdmin = [
    {
      value: 'Apps',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: `https://dashboard-exceed.herokuapp.com/probe`,
          nesting: [
            {
              value: 'Create category',
              href: `https://dashboard-exceed.herokuapp.com/dashboard/create-category`,
            },
            {
              value: 'Create lecture',
              href: `https://dashboard-exceed.herokuapp.com/dashboard/create-lecture`,
            },
            {
              value: 'Chart exercise',
              href: `https://dashboard-exceed.herokuapp.com/dashboard/create-exercise`,
            },
          ],
        },
        {
          value: 'Categories',
          icon: 'pivot',
          href: `https://dashboard-exceed.herokuapp.com/dashboard/categories`,
        },
        {
          value: 'Dashboard',
          icon: 'home',
          href: `https://dashboard-exceed.herokuapp.com/`,
        },
        {
          value: 'Change user info',
          icon: 'form',
          href: `https://dashboard-exceed.herokuapp.com/dashboard/change_user_data`,
        },
        {
          value: 'Lectures',
          icon: 'send-to-graph',
          href: `https://dashboard-exceed.herokuapp.com/dashboard/lectures`,
        },
        {
          value: 'Сhange exercise',
          icon: 'exchange',
          href: `https://dashboard-exceed.herokuapp.com/dashboard/change-exercise`,
        },
      ],
    },
  ];
  return menuAdmin;
}
