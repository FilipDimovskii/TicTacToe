import { useState } from 'react';
const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={changeHandler}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
export default Player;
