/* globals Sammy */
import { home } from '../controllers/catalog.js'
import { register, login, logout, createMovie, editMovie, likeMovie, deleteMovie } from './data.js'
import { registerPage, registerPost } from '../controllers/user.js'

window.addEventListener('load', () => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('/', home);
        // this.get('#/home', home)

        this.get('#/register', registerPage);
        this.userData = {
            email: sessionStorage.getItem('email') || '',
            userId: sessionStorage.getItem('userId') || '',

        }


        this.post('#/register', (ctx) => { registerPost.call(ctx) })
    });
    app.run();
})