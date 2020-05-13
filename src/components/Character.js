import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function Character() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    Axios.get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
      .then(response => {
        setData(response.data);
      })
  }, [id])

  const { name, image } = data;
  return (
    <>
      <h1>{name}</h1>
      <img alt={name} src={image} />

      <button type="button" onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
    </>
  )
}

export default Character;