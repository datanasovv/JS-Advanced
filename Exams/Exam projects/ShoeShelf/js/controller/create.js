export async function createPage() {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    };

    const context = Object.assign({}, this.app.userData);

    if (this.app.userData.email) {

    }

    this.partial('./templates/create.hbs', context)
}