import Layout from "./components/Layout/Layout";
import  "./App.css"
import PizzaBulider from "./components/PizzaBuilder/PizzaBuilder";



function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Pizza builder by  master Kytman Batyrkanov</h1>
        <PizzaBulider />
      </Layout>
    </div>
  );
}

export default App;
