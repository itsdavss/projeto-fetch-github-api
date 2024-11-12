import { baseUrl } from "../variables.js"

//buscando as informações do usuário
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }