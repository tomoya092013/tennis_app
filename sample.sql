SELECT game_number,pointmiss_order,serve,shot_type,fore_back,course,poach_volley_course,miss_result,rally_count
FROM public.points_misses
WHERE public.points_misses.match_id = 126 
AND public.points_misses.game_number = 1
AND public.points_misses.ispoint = TRUE
AND public.points_misses.player_id = (SELECT player_id FROM public.game_players WHERE match_id = 126 AND player_number = 'player1')
ORDER BY public.points_misses.pointmiss_order ASC




SELECT game_number,pointmiss_order,serve,shot_type,fore_back,course,poach_volley_course,miss_result,rally_count
FROM 
  (SELECT  game_number,pointmiss_order,serve,shot_type,fore_back,course,poach_volley_course,miss_result,rally_count FROM public.points_misses
    WHERE player_id = 10) as tb
-- JOIN game_players ON public.points_misses.match_id = public.game_players.match_id 
JOIN  
  (SELECT match_id,player_number FROM game_players WHERE player_number = 'player1') as ta
  ON tb.match_id = ta.match_id 
WHERE tb.match_id = 126 
AND tb.game_number = 1
AND tb.ispoint = TRUE
-- AND public.game_players.player_number = 'player1' 
ORDER BY tb.pointmiss_order ASC


SELECT player_id FROM public.game_players
WHERE match_id = 126 AND player_number = 'player1'