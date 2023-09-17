

import { React } from 'react';
import { Provider } from 'react-redux';
import store from './Store/store'
import TodoApp from './Components/TodoApp';

function App() {

  
  return (

    <Provider store={store}>
          <div className="App">
       <TodoApp/>
      </div>
    </Provider>


  );
}

export default App;
