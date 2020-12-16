import { showError, showInfo } from './notifications.js'
import API from './api.js';

const endpoints = {
    MOVIES: 'data/movies',
    MOVIES_BY_ID: 'data/movies/'
};

const api = new API(
    'C0E4EAEA-0C21-2D02-FF19-FC7AC332D400',
    'B01AC9F3-AC5E-4463-97AF-32358FAB025E'
);

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

// export async function getAll() {
//     return api.get(endpoints.RECIPES);
// }

export async function createMovie(movieInfo) {
    return api.post(endpoints.MOVIES, movieInfo);
}

export async function getMovieById(id) {
    return api.get(endpoints.MOVIES_BY_ID + id);
}

export async function editMovie(id, movieInfo) {
    return api.put(endpoints.MOVIES_BY_ID + id, movieInfo);
}

export async function likeMovie(id) {
    const movie = await getMovieById(id);

    return editMovie(id, { likes: movie.likes + 1 });
}

export async function deleteMovie(id) {
    return api.delete(endpoints.MOVIES_BY_ID + id);
}

export function checkResult(result) {
    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }
}
