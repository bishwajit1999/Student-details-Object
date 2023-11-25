function Student(name, roll_no, studentClass, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = studentClass;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);

        subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);

        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${subjects[i]} - ${this.marks_of_5_subjects[subjects[i]]}`);
        }
    };

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}`);
        console.log(`| Roll no. - ${this.roll_no}`);
        console.log(`| Class    - ${this.class}`);
        console.log(`| Section  - ${this.section}`);

        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject}  - ${this.marks_of_5_subjects[subject]}`);
        }

        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        console.log(`| Percentage - ${percentage.toFixed(1)} %`);
        console.log("+--------------------+");
    };
}

const student1 = new Student("bishwajit", 16, "X", "A", {
    science: 71,
    maths: 74,
    social_science: 76,
    english: 82,
    hindi: 66
});

student1.printTop3Subjects();

student1.printReportCard();
