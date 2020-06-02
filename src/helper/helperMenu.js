export default function helperMenu() {
  const menuAdmin = [
    {
      value: 'Main',
      menuIteam: [
        {
          value: 'Dashboard',
          icon: 'home',
          badges: 2,
          href: 'http://localhost:3000/probe',
          nesting: [
            {
              value: 'bigbigbigbig',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
            {
              value: 'small',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
          ],
        },
      ],
    },
    {
      value: 'Apps',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: 'http://localhost:3000/probe',
          nesting: [
            {
              value: 'Chart 1',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
            {
              value: 'Chart 2',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
          ],
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
          value: 'Calendar',
          icon: 'calendar',
          href: 'http://localhost:3000/probe',
        },
        {
          value: 'Email',
          icon: 'envelope',
          href: 'http://localhost:3000/probe',
        },
        {
          value: 'Profile',
          icon: 'user',
          href: 'http://localhost:3000/probe',
          badges: 3,
        },
        {
          value: 'Widget',
          icon: 'grid-view',
          href: 'http://localhost:3000/probe',
        },
      ],
    },
  ];
  return menuAdmin;
}
