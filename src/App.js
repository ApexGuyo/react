
import './App.css';
import Employee from './component/employee';
import { useState } from 'react';

export default App;
function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
        <input
        type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
        />
        <Employee name="guyo" role="intern" />
        <Employee name="guyo" role={role} />
        <Employee name="guyo"  />
        </>
        
      ): (
        <p>you cannot see the employee</p>
      )

      }
      
    </div>
  );
}
 
