import Home from './Components/Home'; 
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="https://sahil0705.github.io/Frontend-CRUD/" component={Home} />
        <Route exact path="https://sahil0705.github.io/Frontend-CRUD/all" component={AllUsers} />
        <Route exact path="https://sahil0705.github.io/Frontend-CRUD/add" component={AddUser} />
        <Route exact path="https://sahil0705.github.io/Frontend-CRUD/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;