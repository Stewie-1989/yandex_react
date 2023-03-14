import React from 'react';
import './modules.css';
import Application from "../application/Application";
import {URL} from '../../utils/constant';
import {getData} from '../../utils/handler'

function App() {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  })

  React.useEffect(() => {
    getData({setState, state});
  },[]);

// function getData() {
//   setState({...state, hasError: false, isLoading: true});
//   fetch(URL)
//       .then(res => res.ok? res.json() : res.json().then((err) => Promise.reject(err)))
//       .then(data => setState({...state, data: data.data, isLoading: false }))
//       .catch(e => {
//         setState({ ...state, hasError: true, isLoading: false });
//   });
// };

  return (

        <section>
          {state.isLoading && 'Загрузка...'}
          {state.hasError && 'Произошла ошибка'}
          {!state.isLoading &&
              !state.hasError &&
              state.data.length &&
              <Application data={state}/>
          }
        </section>

  );
}

export default App;
