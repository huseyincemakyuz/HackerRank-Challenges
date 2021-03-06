SELECT
CASE WHEN GRADES.GRADE<8 THEN NULL
WHEN GRADES.GRADE>=8 THEN STUDENTS.NAME END,
GRADES.GRADE,STUDENTS.MARKS FROM STUDENTS
RIGHT JOIN GRADES ON STUDENTS.MARKS BETWEEN GRADES.MIN_MARK AND GRADES.MAX_MARK
WHERE STUDENTS.MARKS IS NOT NULL
ORDER BY GRADES.GRADE DESC,STUDENTS.NAME ASC
