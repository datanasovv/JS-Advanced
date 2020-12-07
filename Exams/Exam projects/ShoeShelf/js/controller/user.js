import { register, login, logout } from '../data.js'

export async function registerPage() {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }
    this.partial('./templates/register.hbs')
}

export async function registerPost() {
    if (this.params.email.length > 0 && this.params.password.length > 5 && (this.params.password === this.params.rePassword)) {
        const result = await register(this.params.email, this.params.password);
        this.redirect('#/home')
    }
}

export async function loginPage() {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }
    this.partial('./templates/login.hbs')
}

export async function loginPost() {

    const result = await login(
        this.params.loginEmail,
        this.params.loginPassword
    );
    this.app.userData.email = result.email;
    this.app.userData.userId = result.objectId;

    this.redirect('/')

}

export async function logoutUser() {
    try {
        await logout();
        this.app.userData.email = '';
        this.app.userData.userId = '';
        this.redirect('/')
    } catch (err) {
        console.log(err);
    }
}
