SELECT id, age, coins_needed, power FROM 
(
    SELECT Wands.id, Wands_Property.age, Wands.coins_needed, Wands.power,
    ROW_NUMBER() OVER  
    
        (PARTITION BY Wands.code,Wands.power  
            ORDER BY Wands.coins_needed, Wands.power DESC
        )AS RowNumber
    FROM Wands 
    INNER JOIN Wands_Property ON Wands.code = Wands_Property.code
    WHERE Wands_Property.is_evil = 0
   
)
AS Wand_Data 
WHERE RowNumber = 1
ORDER BY power DESC, age DESC