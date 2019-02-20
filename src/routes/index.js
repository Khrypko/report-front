import Categories from 'pages/Categories';
import Items from 'pages/Items';
import Report from 'pages/Report';


const routes = [
    {
        isExact: true,
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        isExact: true,
        path: '/items',
        name: 'Items',
        component: Items
    },
    {
        isExact: true,
        path: '/reports',
        name: 'Create Report',
        component: Report
    }
]

export default routes;