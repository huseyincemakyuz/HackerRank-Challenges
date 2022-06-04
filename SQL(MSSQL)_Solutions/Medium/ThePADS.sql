Declare @cumle varchar(100)
SET @cumle='There are a total of '

SELECT NAME+'('+(SUBSTRING(Occupation,1,1))+')' FROM OCCUPATIONS
UNION
SELECT CONCAT(@cumle,COUNT(OCCUPATION),' ',LOWER(Occupation)+'s','.') FROM OCCUPATIONS
GROUP BY OCCUPATION