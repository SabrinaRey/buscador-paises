import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {



  const [pais, setPais] = useState([]);
  const [busqueda, setBusqueda] = useState('Argentina')

  const buscarPais = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${busqueda}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPais(data)
      });
  }

  useEffect(() => {
    buscarPais()
  }, [busqueda]);


  const handleChange = e => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <div className="main">
      <div className="card">

        {pais.length >= 0 && pais.map(element => {
          return (<>
            <img alt={element.name} src={element.flag}></img>
            <p> <span>Nombre:</span> {element.name}</p>
            <p><span>Capital:</span> {element.capital}</p>
            <p><span>Población:</span> {element.population}</p>
          </>
          )
        }
        )}
        <form onSubmit={handleSubmit}>
          <input value={busqueda} onChange={handleChange} />
          <input className= "buttonBuscar" type="submit" value="Buscar País" />
        </form>
      </div>
    </div>
  );
}

export default App;
