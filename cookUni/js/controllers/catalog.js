export default async function home() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        catalog: await this.load('./templates/catalog/catalog.hbs'),
        recipe: await this.load('./templates/catalog/recipe.hbs')

    };
    const context = Object.assign({}, this.app.userData)
    if (this.app.userData.username) {

    }

    this.partial('./templates/home.hbs', this.app.userData)
}