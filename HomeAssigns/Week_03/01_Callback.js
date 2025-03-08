// Learn how to use callbacks to handle asynchronous tasks in JavaScript.

let browser = "Chrome";
function checkBrowserVersion(browser,callback)
{
    setTimeout(() => {
        callback(browser);
    },2000);

}

function printBrowserVersion(browser){
 console.log(` Browser version using callback : ${browser} `);
}

checkBrowserVersion(browser,printBrowserVersion);