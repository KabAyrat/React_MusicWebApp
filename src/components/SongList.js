import React from 'react';

const SongList = ({ songs, onSelectSong }) => {
  return (
    <ul className="list-none p-0">
      {songs.map((song) => (
        <li
          key={song.id}
          onClick={() => onSelectSong(song)}
          className="cursor-pointer p-2 border-b border-gray-200 hover:bg-gray-100"
        >
          {song.title}
        </li>
      ))}
    </ul>
  );
};

export default SongList;
