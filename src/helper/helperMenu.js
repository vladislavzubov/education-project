export default function helperMenu() {
  const menuAdmin = [
    {
      value: 'Apps',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: `${REACT_CLIENT_URL}/probe`,
          nesting: [
            {
              value: 'Create category',
              href: `${REACT_CLIENT_URL}/dashboard/create-category`,
            },
            {
              value: 'Create lecture',
              href: `${REACT_CLIENT_URL}/dashboard/create-lecture`,
            },
            {
              value: 'Chart exercise',
              href: `${REACT_CLIENT_URL}/dashboard/create-exercise`,
            },
          ],
        },
        {
          value: 'Categories',
          icon: 'pivot',
          href: `${REACT_CLIENT_URL}/dashboard/categories`,
        },
        {
          value: 'Dashboard',
          icon: 'home',
          href: `${REACT_CLIENT_URL}/`,
        },
        {
          value: 'Change user info',
          icon: 'form',
          href: `${REACT_CLIENT_URL}/dashboard/change_user_data`,
        },
        {
          value: 'Lectures',
          icon: 'send-to-graph',
          href: `${REACT_CLIENT_URL}/dashboard/lectures`,
        },
        {
          value: 'Сhange exercise',
          icon: 'exchange',
          href: `${REACT_CLIENT_URL}/dashboard/change-exercise`,
        },
      ],
    },
  ];
  return menuAdmin;
}
