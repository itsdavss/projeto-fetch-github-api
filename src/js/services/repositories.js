import { baseUrl, repositoriesQuantity } from "../variables.js"

//buscando as os repositórios do usuário
async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getRepositories }