SELECT Hackers.hacker_id,Hackers.name FROM Submissions

INNER JOIN Challenges ON Submissions.challenge_id=Challenges.challenge_id

INNER JOIN Difficulty ON Challenges.difficulty_level=Difficulty.difficulty_level

INNER JOIN Hackers ON Submissions.hacker_id=Hackers.hacker_id
WHERE Submissions.score=Difficulty.score AND Challenges.difficulty_level=Difficulty.difficulty_level

GROUP BY Hackers.hacker_id,Hackers.name
HAVING COUNT(Hackers.hacker_id)>1
ORDER BY COUNT(Hackers.hacker_id) DESC,Hackers.hacker_id ASC