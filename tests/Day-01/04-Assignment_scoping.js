// To understand scoping concept of const, var and let
const browserversion = "Chrome";

function getBrowserVersion(){
    if(browserversion.startsWith("Chrome"))
    {
            let browserVersion = "Firefox";
            var browserver = "Safari";
            console.log("verify block scoped for let", browserVersion);
            console.log("verify block scoped for var", browserver);

    }
   // console.log("verify function scoped for let", browserVersion); throws reference error
   console.log("verify function scoped for var", browserver);
}
getBrowserVersion();
console.log("check global const", browserversion);
