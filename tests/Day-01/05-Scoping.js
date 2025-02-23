// to understand scoping
var gender = "female";

function demo(){

        let colour  = "brown";
        if(gender.startsWith("female"))
        {
            var age = 30;
            colour = "pink";
            console.log("Her fav colour is ", colour);

        }

        else{
            var age = 35;
            console.log("His fav colour is" ,colour);
        }

    console.log(age);
}
demo();
console.log(gender);    