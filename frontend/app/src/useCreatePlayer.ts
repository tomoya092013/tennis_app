import { useNavigate } from 'react-router-dom';

export const useCreatePlayer = () => {
  const navigate = useNavigate();

  const enabledCreatePlayerButton = (playerName: string): boolean => playerName !== '';

  const createPlayer = (playerName: string) => {
    const data = JSON.stringify({ name: playerName });
    fetch('http://localhost:5001/player/register', { method: 'POST', body: data });
  };

  const navigateNewGame = () => {
    navigate('/settingNewGame');
  };

  const navigateCreatePlayer = () => {
    navigate('/');
  };

  return {
    enabledCreatePlayerButton,
    createPlayer,
    navigateNewGame,
    navigateCreatePlayer,
  };
};
