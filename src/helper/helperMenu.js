export default function helperMenu() {
  const menuAdmin = [
    {
      value: 'Меню Админа',
      menuIteam: [
        {
          value: 'Главная',
          icon: 'home',
          href: '/dashboard/',
        },
        {
          value: 'Мой профиль',
          icon: 'user',
          href: '/dashboard/change_user_data',
        },
        {
          value: 'Стажеры',
          icon: 'people',
          href: '/dashboard/trainees',
        },
        {
          value: 'Регистрация',
          icon: 'new-person',
          href: '/dashboard/registration',
        },
        {
          value: 'Категории',
          icon: 'application',
          href: '/dashboard/create-category',
        },
        {
          value: 'Лекции',
          icon: 'applications',
          href: '/dashboard/create-lecture',
        },
        {
          value: 'Упражнения',
          icon: 'annotation',
          href: '/dashboard/create-exercise',
        },
      ],
    },
    {
      value: 'Старое меню',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: '/probe',
          nesting: [
            {
              value: 'Create category',
              href: '/dashboard/create-category',
            },
            {
              value: 'Create lecture',
              href: '/dashboard/create-lecture',
            },
            {
              value: 'Chart exercise',
              href: '/dashboard/create-exercise',
            },
          ],
        },
        {
          value: 'Categories',
          icon: 'pivot',
          href: '/dashboard/categories',
        },
        {
          value: 'Dashboard',
          icon: 'home',
          href: '',
        },
        {
          value: 'Change user info',
          icon: 'form',
          href: '/dashboard/change_user_data',
        },
        {
          value: 'Lectures',
          icon: 'send-to-graph',
          href: '/dashboard/lectures',
        },
        {
          value: 'Сhange exercise',
          icon: 'exchange',
          href: '/dashboard/change-exercise',
        },
      ],
    },
  ];
  return menuAdmin;
}
