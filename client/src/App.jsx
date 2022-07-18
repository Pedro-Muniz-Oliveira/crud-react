import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards"

function App() {
	const [values, setValues] = useState();
	const [listUsers, setListUsers] = useState();

	//console.log(listUsers);
	//console.log(values)

	
	 const escreveValor = (value) => {
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};

	const handleClickButton = () => {
		Axios.post("http://localhost:3007/register", {
			name: values.name,
			cost: values.cost,
		}).then((response) => {
			console.log(response);
		});
	};

	useEffect(() => {
		Axios.get("http://localhost:3007/getCards").then((response) => {
			setListUsers(response.data);
		});
	}, []);

	return <div className=".app-container">
		<div className="register-container">
			<h1 className="register-title">Teste de CRUD</h1>
			<input type="text" name="name" placeholder="Nome" className="register-input" onChange={escreveValor}></input>
			<input type="text" name="cost" placeholder="Preço" className="register-input" onChange={escreveValor}></input>
			<button className="register-button" onClick={() => handleClickButton()}>Cadastrar</button>
		</div>
		{typeof listUsers !== "undefined" && 
		  listUsers.map((value) => {
			return <Card 
			key={value.id} 
			listCard={listUsers} 
			setListCard={setListUsers} 
			id={value.id} 
			nome={value.name} 
			cost={value.cost} 
			></Card>;
		})}
		
	</div>
}
export default App;