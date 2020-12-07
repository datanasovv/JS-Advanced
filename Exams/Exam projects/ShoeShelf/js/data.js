
import API from './api.js';

const endpoints = {
    shoes: 'data/shoes',
    shoes_by_id: 'data/shoes/'
};

const api = new API(
    'E9975A4C-9246-2EDE-FFB5-C559A8B1A500',
    'AD46EDA7-9C80-4184-82C7-6395D4B4AB2E'
       
);

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

// export async function getAll() {
//     return api.get(endpoints.RECIPES);
// }

export async function createShoes(recipe) {
    return api.post(endpoints.shoes, recipe);
}

// export async function getRecipeById(id) {
//     return api.get(endpoints.RECIPE_BY_ID + id);
// }

// export async function editRecipe(id, recipe) {
//     return api.put(endpoints.RECIPE_BY_ID + id, recipe);
// }

// export async function likeRecipe(id) {
//     const recipe = await getRecipeById(id);

//     return editRecipe(id, { likes: recipe.likes + 1 });
// }

// export async function deleteRecipe(id) {
//     return api.delete(endpoints.RECIPE_BY_ID + id);
// }

// export function checkResult(result) {
//     if (result.hasOwnProperty('errorData')) {
//         const error = new Error();
//         Object.assign(error, result);
//         throw error;
//     }
// }
