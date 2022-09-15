const generateTeam = function (team) {
    function generateManagerHTML(managers) {
        let html = '';
        managers.forEach(function (manager) {
            html += `
             <article class="col-md-4 ">
                <div class="card">
                    <div class="card-header" style="background-color: red; color:white;">
                        <h2>${manager.getName()}</h2>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${getId()}</li>
                        <li class="list-group-item">Email: ${manager.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </article>

            
            `;
        });
    }

    generateManagerHTML(team.managers);
}

const generateHTML = function(team) {
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header class="container-fluid text-center p-5" style="background-color:darkblue; color: white;">
            <h1>My Team</h1>
        </header>
        <main class="container text-center p-5">
            <section class="row">
                ${generateTeam(team)}
    
            </section>
        </main>
    
    </body>
    
    </html>
    
    `;
}