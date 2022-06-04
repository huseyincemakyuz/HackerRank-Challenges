SELECT  Company.company_code, Company.founder,
COUNT(DISTINCT Lead_Manager.lead_manager_code),
COUNT(DISTINCT Senior_Manager.senior_manager_code),
COUNT(DISTINCT Manager.manager_code),
COUNT(DISTINCT Employee.employee_code) FROM Company

INNER JOIN Lead_Manager ON Company.company_code=Lead_Manager.company_code

INNER JOIN Senior_Manager ON Company.company_code=Senior_Manager.company_code AND Lead_manager.lead_manager_code = Senior_Manager.lead_manager_code 

INNER JOIN Manager ON Company.company_code=Manager.company_code 
AND Lead_manager.lead_manager_code=Manager.lead_manager_code 
AND Senior_Manager.senior_manager_code=Manager.senior_manager_code

INNER JOIN Employee ON Company.company_code=Employee.company_code
AND Lead_manager.lead_manager_code=Employee.lead_manager_code 
AND Senior_Manager.senior_manager_code=Employee.senior_manager_code
AND Manager.manager_code=Employee.manager_code

GROUP BY Company.company_code,Company.founder
ORDER BY Company.company_code ASC