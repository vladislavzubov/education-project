import { requests } from '../services/requests';

export default function helperMenu() {
  // try {
  //   const allCategories = await requests('get', 'category');
  //   console.log(allCategories.data);

  //   const manuCategories = allCategories.data.map((category, index) => {
  //     return {
  //       value: category.name,
  //       href: `http://localhost:3000/dashboard/categories/${category.id}`,
  //       icon: 'properties',
  //     };
  //   });
  //   console.log(manuCategories);
  //   const menuUser = [
  //     {
  //       value: 'Category',
  //       menuIteam: manuCategories,
  //     },
  //   ];
  //   console.log(menuUser);

  //   return menuUser;
  // } catch (e) {
  //   console.log('falied menu', e);
  // }

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
  console.log(menuAdmin);

  return menuAdmin;
}
