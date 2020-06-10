export default function helperMenu() {
  const menuAdmin = [
    {
      value: 'Apps',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: `${process.env.REACT_CLIENT_URL}/probe`,
          nesting: [
            {
              value: 'Create category',
              href: `${process.env.REACT_CLIENT_URL}/dashboard/create-category`,
            },
            {
              value: 'Create lecture',
              href: `${process.env.REACT_CLIENT_URL}/dashboard/create-lecture`,
            },
            {
              value: 'Chart exercise',
              href: `${process.env.REACT_CLIENT_URL}/dashboard/create-exercise`,
            },
          ],
        },
        {
          value: 'Categories',
          icon: 'pivot',
          href: `${process.env.REACT_CLIENT_URL}/dashboard/categories`,
        },
        {
          value: 'Dashboard',
          icon: 'home',
          href: `${process.env.REACT_CLIENT_URL}/`,
        },
        {
          value: 'Change user info',
          icon: 'form',
          href: `${process.env.REACT_CLIENT_URL}/dashboard/change_user_data`,
        },
        {
          value: 'Lectures',
          icon: 'send-to-graph',
          href: `${process.env.REACT_CLIENT_URL}/dashboard/lectures`,
        },
        {
          value: 'Сhange exercise',
          icon: 'exchange',
          href: `${process.env.REACT_CLIENT_URL}/dashboard/change-exercise`,
        },
      ],
    },
  ];
  return menuAdmin;
}
