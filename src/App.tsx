import { Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import InfoPage from './components/InfoPage/InfoPage'
import Todo from './components/Todo/Todo'

function App() {
    return (
        <>
            <NavBar />
            <Route exact path="/" component={InfoPage} />
            <Route path="/todos" component={Todo} />
        </>
    )
}

export default App
