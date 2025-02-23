// Calback functions understanding

function checkAvailability(movieName, callplaymovie,callmovietime)
{
    console.log(` Check for movie name : ${movieName}` );

    setTimeout(() => {
        console.log( `Movie ${movieName} is available`);
        callplaymovie(movieName);
    },2000);

    callmovietime(movieName);
}

function playmovie(movieName){
 console.log(` Playing the movie ${movieName} `);
}

function movietime(movieName)
{
    console.log(` ${movieName} movie time is 2 hrs`);
}

checkAvailability("Dragon",playmovie,movietime);