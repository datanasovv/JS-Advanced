import { register, checkResult } from '../js/data.js';

export async function registerPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }
    this.partial('./templates/user/register.hbs')

}

export async function registerPost() {
    try {
        if (this.params.email.length < 1) {
            throw new Error('Email input must be filled');
        }
        if (this.params.password.length < 6) {
            throw new Error('The password must be at least 6 characters long');
        }
        if (this.params.password !== this.params.repeatPassword) {
            throw new Error('Passwords dont match');
        }
        const result = await register(this.params.email,
            this.params.password,
            this.params.repeatPassword);

        checkResult(result);
        // this.app.userData.email = result.email;
        // this.app.userData.userId = result.objectId;

        this.redirect('#/home')
    } catch (err) {
        console.log(err.message);
    }
}