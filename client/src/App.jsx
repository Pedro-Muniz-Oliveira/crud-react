import React, { useState } from "react";
import "./App.css";

function App() {
	const [values, setValues] = useState();

	console.log(values)
	const escreveValor = (value) => {
		setValues((prevValue) => ({
		    ...prevValue,
			[value.target.name]: value.target.value,
		}));
	};

	const handleClickButton = () =>{
		console.log(values);
	}

return <div className=".app-container">
	<div className="register-container">
		<h1 className="register-title">Teste de CRUD</h1>
		<input type="text" name="name" placeholder="Nome" className="register-input" onChange={escreveValor}></input>
		<input type="text" name="cost" placeholder="Preço" className="register-input" onChange={escreveValor}></input>
		<button className="register-button" onClick={() => handleClickButton()}>Cadastrar</button>
	</div>

</div>;
}
export default App;