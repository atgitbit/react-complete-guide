import {ExpenseItem, minLista} from "./components/ExpenseItem";

function App() {

// let listan  = minLista.map(
//   nummer => <span>{{nummer}}</span>
// );

  return (
    <div>
      <h2> Hallå Let's get started!</h2>
      <div style={{color: 'pink'}}> 
        Hallå Let's get started!
      </div>


      <ExpenseItem></ExpenseItem>

      {/* <div>min lista : 
       
        
        {minLista.map(
          nummer => <span key={nummer}>{{nummer}}</span>
        )}

        </div> */}
    </div>
  );
}

export default App;
