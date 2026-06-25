function calculateResult() {
    let numSubjects = parseInt(document.getElementById("subjects").value);
    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }
    let totalMarks = 0;
    let isPass = true;
    for (let i = 1; i <= numSubjects; i++) {
        let marks = parseFloat(prompt(`Enter marks for Subject ${i} (0 - 100):`));
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid marks entered!");
            return;
        }
        totalMarks += marks;
        if (marks < 40) {
            isPass = false;
        }
    }
    let averageMarks = totalMarks / numSubjects;
    let grade = "";
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "A";
    } else if (averageMarks >= 70) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    } else if (averageMarks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    let resultStatus = isPass ? "Pass" : "Fail";
    document.getElementById("result").innerHTML = `
        <h2>Result</h2>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${resultStatus}</p>
    `;
}