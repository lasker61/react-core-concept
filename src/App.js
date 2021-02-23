import logo from './logo.svg';
import './App.css';

function App() {
  var name ='Dr Mahfuz';
  var person ={
    fname : 'eva rahman',
    age : 19,
    job : 'singer'
  }
  var style ={
    backgroundColor:'cyan'
  }
  var sing ={
    backgroundColor:'red'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>hello nahid</h1>
        <p>my name s nahid hossain lasker .i am a student of nsu .i am from cse depertment Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, sint id facilis assumenda voluptates eaque laboriosam sunt vdoloremque ad iste vel ea! Unde est distinctio rem itaque! Repellat, obcaecati.</p>

        <a href="facebook.com">click me</a>
        <h3 style = {style}>my heading :{2+3}</h3>
        <h3>{3+465+476*23435}</h3>
        <h2 style ={{backgroundColor:'yellow'}}>{name} is the best singer of bd</h2>
        <p>{person.fname}</p>
        <p style = {sing}>{person.job}</p>
      </header>
    </div>
  );
}

export default App;
