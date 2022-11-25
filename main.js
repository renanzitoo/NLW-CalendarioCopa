function createGame(team1, hour, team2) {
    return `   
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong> 
        <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}">
    </li>                 
 
`
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card">
    <h2>${date}<span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
    </div>
    `
}

function brazilGames() {
    return
    `  
    <h1>Jogos do Brasil</h1>
    ${createCard ('28/11', 'segunda',
    createGame("brazil", "13:00", "switzerlands")
    )}
    ${createCard ('02/11', 'quinta',
    createGame("brazil", "16:00", "cameroon")
    )}
    `
    

}


document.querySelector("#app").innerHTML = `
    <header>
    <img src="./assets/logo.svg" alt="Logo NLW">

    </header>
    <main id="cards">

        ${createCard('25/11', 'sexta',
        createGame("wales", "07:00", "iran") +
        createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador") +
        createGame("england", "16:00", "usa")
        )}

        ${createCard('26/11', 'sabado',
        createGame("tunisia", "07:00", "australia") +
        createGame("poland", "10:00", "saudi-arabia") +
        createGame("france", "13:00", "denmark") +
        createGame("argentina", "16:00", "mexico")
        )}

        ${createCard('27/11', 'domingo',
        createGame("japan", "07:00", "costa-rica") +
        createGame("belgium", "10:00", "morroco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")
        )}

        ${createCard('28/11', 'segunda',
        createGame("cameroon", "07:00", "serbia") +
        createGame("south-korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerlands") +
        createGame("portugal", "16:00", "uruguay")
        )}

        ${createCard('29/11', 'terça',
        createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "qatar") +
        createGame("iran", "16:00", "usa") +
        createGame("wales", "16:00", "england")
        )}

        ${createCard('30/11', 'quarta',
        createGame("tunisia", "12:00", "france") +
        createGame("australia", "12:00", "denmark") +
        createGame("poland", "16:00", "argentina") +
        createGame("saudi-arabia", "16:00", "mexico")
        )}
        ${createCard('01/12', 'quinta',
        createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "morroco") +
        createGame("japan", "16:00", "spain") +
        createGame("costa-rica", "16:00", "germany")
        )}
        ${createCard('02/12', 'quinta',
        createGame("south-korea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("serbia", "16:00", "switzerlands") +
        createGame("brazil", "16:00", "cameroon")
        )}
    </main>
`
