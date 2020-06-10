export default function helperMenu() {
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
        {
          value: 'Сhange exercise',
          icon: 'exchange',
          href: 'http://localhost:3000/dashboard/change-exercise',
        },
      ],
    },
  ];
  return menuAdmin;
}
