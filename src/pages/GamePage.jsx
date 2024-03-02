import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

function GamePage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Game")
  }, []);

  return (
    <div className="container pt-4">
      GAME
    </div>
  );
}

export default GamePage