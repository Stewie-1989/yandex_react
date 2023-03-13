import React from 'react';
import './App.css';
import Application from "./components/app/Application";


function App() {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  })

  React.useEffect(() => {
    getData();
  },[]);

function getData() {
  setState({...state, hasError: false, isLoading: true});
  fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(res => res.json())
      .then(data => setState({...state, data: data.data, isLoading: false }))
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
  });
};

  return (

        <section>
            <section id="react-modals">
          {state.isLoading && 'Загрузка...'}
          {state.hasError && 'Произошла ошибка'}
          {!state.isLoading &&
              !state.hasError &&
              state.data.length &&
              <Application data={state}/>
          }
          </section>
        </section>

  );
}

export default App;
