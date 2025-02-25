// Learn to use switch statements in JavaScript to categorize data based on multiple conditions.

let score = 70;
console.log(`Grade for Score ${score} is ${studentGrade(score)}`);

function studentGrade(score){
    let grade;
    switch(true){
        case score >100 || score <1:
            grade = 'Incorrect Score';
            break;
        case score >=90 && score <=100:
            grade = 'O - Outstanding';
            break;
        case score>=80:
            grade ='A - Excellent';
            break;
        case score>=70:
            grade ='B - Good';
            break;
        case score>=60:
            grade ='C - Average';
            break;
        case score<=59:
            grade = 'D - Needs Improvement';
            break;       
        default:
            grade = 'Incorrect Score';
    }

    return grade;
}