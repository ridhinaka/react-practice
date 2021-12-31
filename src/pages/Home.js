import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilm } from "../store/modules/Film/actions";

export default function Home() {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.film);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getAllFilm()).then((r) => {
      checkConsole()
      setData(r);
    });
  }, [dispatch]);

  function checkConsole() {
    console.log(film, "film");
    console.log(typeof film.data, "filmsss");
  }

  return (
    <>
      <h1>RIDHI</h1>
      {film.isFetching ? (
        "null"
      ) : (
        <ul>
          {data.map((item, i) => (
            <li key={i}>{item.email}</li>
          ))}
        </ul>
      )}

      <p>{JSON.stringify(film.data)}</p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
