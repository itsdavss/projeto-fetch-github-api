const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="User's profile photo">
                                        <div class="data">     
                                            <h1>${user.name ?? 'No registered name found 😢'}</h1>
                                            <p>${user.bio ?? 'No registered bio found 😢'}</p>
                                        </div>
                                        <div class="follows">     
                                            <div>
                                                <p>👥 Followers</p>
                                                <div class="numbers followers">
                                                    ${user.followers}
                                                </div>
                                            </div>
                                            <div>
                                                <p>👥 Following</p>
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
                                                                            <i>🍴 ${repo.forks_count ?? 'No forks'}</i>
                                                                            <i>⭐ ${repo.stargazers_count ?? 'No stargazers'}</i>
                                                                            <i>👀 ${repo.watchers_count ?? 'No watchers'}</i>
                                                                            <i>👩‍💻 ${repo.language ?? 'No language'}</i>
                                                                        </div>
                                                                    </a>
                                                                </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositories</h2>
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
                                    <span>No commit message</span>
                                </li>`
            }
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Events</h2>
                                                <ul>${eventsItems}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>User not found</h3>"
    }
}

export { screen }