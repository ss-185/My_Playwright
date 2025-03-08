
//Understand how to create and use Promises in JavaScript.

function fetchDataFromDatabase() {
     let dataAvail = new Promise((resolve,reject) =>{
    console.log(` Fetching data from database....`);
    const isDataAvailable = true;
 
     setTimeout(()=>{ },3000);
        if(isDataAvailable)
        {    resolve(`Data fetched successfully!`);
        }else{
            reject(`Data not found!`);
         }
        })
        return dataAvail;
    }

        fetchDataFromDatabase()
        .then(message =>{
            console.log(message);    
        })
        
        .catch(error=>{
        console.log(error);
        })