// import {Multiselect} from 'multiselect-react-dropdown'
import './App1.css';
// import {useState} from 'react';
import Reeditinput from './selector/selector';

function App() {

  // var data = [
  //   {id:1,person:'Banana'},
  //       {id:2,person:'Apple'},
  //       {id:3,person:'Orange'},
  //       {id:4,person:'Grapes'},
  //       {id:5,person:'Pinapple'},
  //       {id:6,person:'Cherry'},
  //       {id:7,person:'Custard apple'},
  //       {id:8,person:'Dates'},
  //       {id:9,person:'Figs'},
  //       {id:10,person:'Grapefruit'},
  // ];

  
// const [options]=useState(data);

  return (
    <div className="App">
      <div className="Container">
        <form className="Form">
          {/* <h3 className="header">Creating Multiselect Dropdown using Library</h3> */}
          {/* <div className="uselibraty"><Multiselect options={options}  displayValue="person"/></div> */}
          <div className="uselibraty"><Reeditinput></Reeditinput></div>
        </form>
      </div>
    </div>
  );
}

export default App;