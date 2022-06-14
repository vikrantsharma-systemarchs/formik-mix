
import './App.css';
import FormDialog from "./components/FormDialog";
import Customization from "./components/Customization";
function App() {
    return (
        <div className="App">

            <header className="App-header">
                <h1>archsys</h1>

            </header>


            <FormDialog title={"a1"}/>
            <FormDialog title={"x2"}/>
            <Customization/>


        </div>


    );
}

export default App;
