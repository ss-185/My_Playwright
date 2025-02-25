// Learn if-else and switch case



let browserName = "Chrome";
let testType = "sanity";

runTests(testType,launchBrowser);

function launchBrowser(browserName)
{
    if ( browserName ==="Chrome" || browserName ==="Firefox" || browserName ==="Safari" ) 
        console.log( ` BrowserName is ${browserName} `);
    else
        console.log(' Unsupported Browser  ');
}

function runTests(testType,callback)
{
    switch(testType)
    {
        case 'smoke':
            console.log(`Run smoke tests`);
            break;
        case 'sanity':
            console.log(`Run sanity tests`);
            break;
        case 'regression':
            console.log(` Run regression tests`);
            break;
        default:
            console.log(`By default run Smoke tests `);
    }

    callback(browserName);
}

