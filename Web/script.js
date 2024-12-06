document.addEventListener("DOMContentLoaded", function() {
    let gradeCount = 2;

    function CalcYerGrade() {
        let totalGrade = 0;
        let totalWeight = 0;

        for (let i = 1; i <= gradeCount; i++) {
            let grade = parseFloat(document.getElementById('grade' + i).value);
            let weight = parseFloat(document.getElementById('weight' + i).value);

            if (!isNaN(grade) && !isNaN(weight)) {
                totalGrade += grade * (weight / 100);
                totalWeight += weight;
            }
        }

        if (totalWeight !== 100) {
            alert("The total weight should be 100%");
        } else {
            document.getElementById('result').innerHTML = "Your final grade is: " + totalGrade.toFixed(2) + "!";
        }
    }

    function addYerGrade() {
        gradeCount++;
        let div = document.createElement('div');
        div.className = 'grade-input';
        div.innerHTML = `<input type="number" id="grade${gradeCount}" placeholder="Grade ${gradeCount}"> <input type="number" id="weight${gradeCount}" placeholder="Weight ${gradeCount}(%)">`;
        document.getElementById('gradeForm').insertBefore(div, document.getElementById('buttons'));
    }

    function delYerGrade() {
        if (gradeCount > 2) {
            let gradeInputs = document.getElementsByClassName('grade-input');
            gradeInputs[gradeInputs.length - 1].remove();
            gradeCount--;
        } else {
            alert("You need at least 2 grades to calculate.");
        }
    }

    document.querySelector('button[onclick="CalcYerGrade()"]').onclick = CalcYerGrade;
    document.querySelector('button[onclick="addYerGrade()"]').onclick = addYerGrade;
    document.querySelector('button[onclick="delYerGrade()"]').onclick = delYerGrade;

    // Smooth Scroll Script
    const links = document.querySelectorAll('.scroll-link');
    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});
