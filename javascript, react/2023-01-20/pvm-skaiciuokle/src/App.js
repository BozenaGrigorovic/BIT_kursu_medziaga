import './App.css';
import { useState } from 'react';

const VatCounter = () => {
  const [vat, setVat] = useState(21);
  const [amountNetto, setAmountNetto] = useState();
  const [amountBrutto, setAmountBrutto] = useState();

  const selectVat = (e) => {
    setVat(e.target.value);
    console.log(e.target.value);
  }

  const enterAmountNetto = (e) => {
    setAmountNetto(e.target.value);
    console.log(e.target.value);
  }

  const enterAmountBrutto = (e) => {
    setAmountBrutto(e.target.value);
  }

  const showVat = amountNetto * (vat / 100);
  const showAmountBrutto = parseFloat(amountNetto, 10) + showVat;

  return(
    <div className="container">
      <h1>PVM skaičiuoklė</h1>
    <div className="d-flex my-2">
    <label className="form-label col-3" htmlFor="pvm-select">PVM tarifas</label>
    <select className="form-control col-9" name="pvm" id="pvm-select" onChange={selectVat}>
      <option value="21">21%</option>
      <option value="9">9%</option>
      <option value="5">5%</option>
    </select>
    <br />
    </div>
    <div className="d-flex my-2">
    <label className="form-label col-3" htmlFor="amountNetto">Suma (be PVM)</label>
    <input className="form-control col-9" type="number" id="amountNetto" placeholder="0" onChange={enterAmountNetto}></input>
    <br />
    </div>
    <div className="d-flex my-2">
      <label className="form-label col-3">PVM suma</label>
      <input className="form-control col-9" type="number" placeholder={amountNetto > 0 ? showVat : "0"} readOnly></input>
      <br />
    </div>
    <div className="d-flex my-2">
      <label className="form-label col-3" htmlFor="amountBrutto">Bendra suma (su PVM)</label>
      <input className="form-control col-9" type="number" id="amountBrutto" placeholder={amountNetto > 0 ? showAmountBrutto : "0"} onChange={enterAmountBrutto}></input>
    </div>
    </div>
  );
}


function App() {
  return (
    <VatCounter />
  );
}

export default App;
