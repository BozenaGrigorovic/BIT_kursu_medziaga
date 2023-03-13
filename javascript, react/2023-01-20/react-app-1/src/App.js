import './App.css';
import { useId, useState } from 'react';

const Header = (props) => {
  const id = useId();

  return (
    <header>
      <h1>UAB "Šaunu"</h1>
      <nav>
        <ul>
          {props.nav.map((value, index) => <li key={id + index}>{value}</li>) }
        </ul>
      </nav>
    </header>
  );
}

const Container = (props) => {
  return <div className="container">{props.children}</div>
}

const FormEntry = () => {
      const [tasks, setTasks] = useState([]);
      const [currentTask, setCurrentTask] = useState();

      const handleForm = (e) => {
        e.preventDefault();
        setTasks([...tasks, { name: currentTask, done: false }])
      }

      const handleDone = (e, index) => {
        tasks[index].done = true;
        setTasks([...tasks]);
      }

      return (
        <>
          <h1>Task Manager</h1>
          <form className="input-group" onSubmit={handleForm}>
            <input type="text" className="form-control" onChange={ (e) => setCurrentTask(e.target.value) } />
            <button className="btn btn-primary">Išsaugoti</button>
          </form>
          {tasks.map((value, index) =>
            <li key={value.name + index} onClick={ (e) => handleDone(e, index) } className={value.done ? 'done' : ''}>{value.name}</li>
          )}
        </>
      );
}


function App() {
  const navigacija = ['Titulinis', 'Produktai', 'Apie mus', 'Kontaktai']

  return (
    <Container>
    <Header nav={navigacija} />
    <FormEntry />
    </Container>
  );
}

export default App;
