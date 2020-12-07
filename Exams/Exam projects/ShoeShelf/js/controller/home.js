export async function homePage() {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    };

    const context = Object.assign({}, this.app.userData);

    if (this.app.userData.email) {

    }

    this.partial('./templates/home.hbs', context)
}