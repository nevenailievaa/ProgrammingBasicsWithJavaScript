function processGraduation(input) {
    const studentName = input[0];
    let expelsCount = 0;
    let passedYears = 0;
    let gradesSum = 0;
    let index = 1;

    while (expelsCount < 2 && passedYears < 12) {
        let grade = Number(input[index]);
        
        if (grade < 4) {
            expelsCount++;
            continue;
        }
        
        gradesSum += grade;
        passedYears++;
        index++;
    }

    if (expelsCount < 2) {
        let averageGrade = gradesSum / passedYears;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${passedYears + 1} grade`);
    }
}