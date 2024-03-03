import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';


function App() {
  const [carData, setCarData] = useState({
    dono: "",
    marca: "",
    modelo: "",
    ano: "",
    estado: ""
  });
  const [cars, setCars] = useState([]);
  const [edit, setEdit] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const clearFormData = () => {
    setCarData({
      dono: "",
      marca: "",
      modelo: "",
      ano: "",
      estado: ""
    });
  }

  const createCar = async () => {
    await axios.post('http://localhost:3333/cars', carData);
    clearFormData();
    getCars(); 
    alert(`Carro Cadastrado, ${carData.dono}!`)
  }

  const getCars = async () => {
    const response = await axios.get('http://localhost:3333/cars/');
    setCars(response.data); //
  } 

  const deleteCar = async (id) => {
    await axios.delete(`http://localhost:3333/cars/${id}`);
    getCars();
  }

  const editCar = async (id) => {
    setEdit(id);
    const carToEdit = cars.find(car => car.id === id);
    setCarData({
      id: carToEdit.id,
      dono: carToEdit.dono,
      marca: carToEdit.marca,
      modelo: carToEdit.modelo,
      ano: carToEdit.ano,
      estado: carToEdit.estado
    });
  };

  const saveEditedCar = async () => {
    await axios.put(`http://localhost:3333/cars/${carData.id}`, {carData});
    setEdit(null);
    clearFormData();
    getCars();
    alert(`Edição Feita, ${carData.dono}!`)
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
        <div>
        <h1>Cadastre seu carro</h1>
    <header className='container'>
      </header>
      <label>Dono:   </label>
      <input placeholder='Seu nome' name='dono' value={carData.dono} onChange={handleChange}></input>
      <label> Marca:   </label>
      <input placeholder='Marca do carro' name='marca' value={carData.marca} onChange={handleChange}></input>
      <label> Modelo:   </label>
      <input placeholder='Modelo do carro' name='modelo' value={carData.modelo} onChange={handleChange}></input>
      <label> Ano:   </label>
      <input placeholder='Ano do carro' name='ano' value={carData.ano} onChange={handleChange} required></input>
      <label> Estado:   </label>
      <input  placeholder='Estado do carro' name='estado' value={carData.estado} onChange={handleChange}></input>
      {edit ? (
        <button onClick={saveEditedCar}>Salvar Edição</button>
      ) : (
        <button className="cadastrar"onClick={createCar}>Cadastrar</button>
      )}
<hr></hr>
      <div>
        <h3>Carros Cadastrados</h3>
        <ul className='carrosCadastrados'>
          {cars.map((car, index) => (
            <ul key={index}>
              <p className='dono'>Dono: {car.dono}</p>
              <p>Marca: {car.marca}</p>
              <p>Modelo: {car.modelo}</p>
              <p>Ano: {car.ano}</p>
              <p>Estado: {car.estado}</p>
              <button onClick={() => deleteCar(car.id)}>Deletar</button>
              <button onClick={() => editCar(car.id)}>Editar</button>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
