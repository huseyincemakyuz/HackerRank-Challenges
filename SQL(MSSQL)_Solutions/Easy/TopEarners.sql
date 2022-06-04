SELECT TOP 1 (months*salary),Count(*) FROM EMPLOYEE
GROUP BY (months*salary)
ORDER BY (months*salary) DESC