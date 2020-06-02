const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  value: String,
  menuIteam: Array,
});
const MenuModel = mongoose.model('menu', MenuSchema);

module.exports = MenuModel;

const menuAdmin = new MenuModel({
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
});

menuAdmin.save();
