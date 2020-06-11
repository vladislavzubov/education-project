export default function helperMenu() {
  const menuAdmin = [
    {
      value: 'Меню Админа',
      menuIteam: [
        {
          value: 'Главная',
          icon: 'home',
          href: 'http://localhost:3000/dashboard/',
        },
        {
          value: 'Мой профиль',
          icon: 'user',
          href: 'http://localhost:3000/dashboard/change_user_data',
        },
        {
          value: 'Стажеры',
          icon: 'people',
          href: 'http://localhost:3000/dashboard/trainees',
        },
        {
          value: 'Регистрация',
          icon: 'new-person',
          href: 'http://localhost:3000/dashboard/registration',
        },
        {
          value: 'Категории',
          icon: 'application',
          href: 'http://localhost:3000/dashboard/create-category',
        },
        {
          value: 'Лекции',
          icon: 'applications',
          href: 'http://localhost:3000/dashboard/create-lecture',
        },
        {
          value: 'Упражнения',
          icon: 'annotation',
          href: 'http://localhost:3000/dashboard/create-exercise',
        },
        
        
      ],
    },
    {
      value: 'Старое меню',
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
