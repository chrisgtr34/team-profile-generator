const generateTeam = function (team) {
    let html = '';

    team.managers.forEach(function (manager) {
        html += `
        <article class="col-md-4 ">
            <div class="card">
                <div class="card-header" style="background-color: red; color:white;">
                    <h2>${manager.getName()}<i class="fa-solid fa-mug-hot"></i></h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}<a/></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </article>  
        `;

    });

    team.engineers.forEach(function(engineer) {
        html += `
        <article class="col-md-4 ">
            <div class="card">
                <div class="card-header" style="background-color: red; color:white;">
                    <h2>${engineer.getName()}<i class="fa-solid fa-laptop-code"></i></h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}<a/></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </article>  
        `; 
    });
    team.interns.forEach(function(intern) {
        html += `
        <article class="col-md-4 ">
            <div class="card">
                <div class="card-header" style="background-color: red; color:white;">
                    <h2>${intern.getName()}<i class="fa-solid fa-user-graduate"></i></h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </article>  
        `; 
    });

 return html;
}

const generateHTML = function (team) {
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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

module.exports = generateHTML;