import { registerPage, registerPost, loginPage, loginPost, logoutUser } from './controller/user.js'
import { homePage } from './controller/home.js';
import { createPage } from './controller/create.js'


window.addEventListener('load', () => {
    const app = Sammy('main', function () {
        this.use('Handlebars', 'hbs');

        this.userData = {
            email: sessionStorage.getItem('email') || '',
            userId: sessionStorage.getItem('userId') || ''
        }

        this.get('#/register', registerPage)

        this.get('#/login', loginPage)
        this.get('#/home', homePage);
        this.get('/', homePage);
        this.get('/index.html', homePage)
        this.get('#/logout', logoutUser)
        this.get('#/create', createPage)

        this.post('#/register', (ctx) => { registerPost.call(ctx); })
        this.post('#/login', (ctx) => { loginPost.call(ctx); })



    })
    app.run();
})