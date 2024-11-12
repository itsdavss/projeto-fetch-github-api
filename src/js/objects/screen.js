const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                                        <div class="data">     
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                        </div>
                                        <div class="follows">     
                                            <div>
                                                <p>👥 Seguidores</p>
                                                <div class="numbers followers">
                                                    ${user.followers}
                                                </div>
                                            </div>
                                            <div>
                                                <p>👥 Seguindo</p>
                                                <div class="numbers following">
                                                    ${user.following}
                                                </div>
                                            </div>
                                        </div>
                                       </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                        <h4>${repo.name}</h4>
                                                                        <div class="icons">
                                                                            <i>🍴 ${repo.forks_count}</i>
                                                                            <i>⭐ ${repo.stargazers_count}</i>
                                                                            <i>👀 ${repo.watchers_count}</i>
                                                                            <i>👩‍💻 ${repo.language}</i>
                                                                        </div>
                                                                    </a>
                                                                </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItems}</ul>
                                           </div>`
        }
        
        let eventsItems = ''

        user.events.forEach(function (event) {
            eventsItems += `<li class="item-event">
                                <span class="repo-name">${event.repo.name}:</span>
                            `

            if (event.type === "PushEvent") {
                eventsItems += `
                                    <span>${event.payload.commits[0].message}</span>
                                </li>`
            } else {
                eventsItems += `
                                    <span>Sem mensagem de commit</span>
                                </li>`
            }
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItems}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }