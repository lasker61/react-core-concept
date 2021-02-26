import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// function App() {
//   var name ='Dr Mahfuz';
//   var person ={
//     fname : 'eva rahman',
//     age : 19,
//     job : 'singer'
//   }
//   var style ={
//     backgroundColor:'cyan'
//   }
//   var sing ={
//     backgroundColor:'red'
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit done <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>hello nahid</h1>
//         <p>my name s nahid hossain lasker .i am a student of nsu .i am from cse depertment Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, sint id facilis assumenda voluptates eaque laboriosam sunt vdoloremque ad iste vel ea! Unde est distinctio rem itaque! Repellat, obcaecati.</p>

//         <a href="facebook.com">click me</a>
//         <h3 style = {style}>my heading :{2+3}</h3>
//         <h3>{3+465+476*23435}</h3>
//         <h2 style ={{backgroundColor:'yellow'}}>{name} is the best singer of bd</h2>
//         <p>{person.fname}</p>
//         <p style = {sing}>{person.job}</p>
//         <Student name="Rubel Khan"></Student>
//         <Student name="sakib khan"></Student>
//         <Main paragraph="i am good"></Main>
//         <Main></Main>
//         <Main></Main>
       
//       </header>
//     </div>
//   );
// }
// //create a component
// function Student(props) {
//   const StudentStyle ={
//     border:'1px solid grey',
//     borderRadius:"5px",
//     padding :'5px 10px'
//   }
//   return <h5 style= {StudentStyle}>name:{props.name}</h5>
// }
// function Main(props){
//   return (
//     <div style = {{border :'1px solid red',margin:'5px'  }}>
//       <p>paragraph:{props.paragraph}</p>
//       <a href="facebook.com">submit</a>
//       <h4>multiple item in a component</h4>
//     </div>
//   )
// }

function App() {
  const nayoks =['anwar','joshim','dipjol','faruk','manna','alomgir'];
  const products =[{
    name:'photoshop',
    price:'90$'
  },
  {
    name:'ms word',
    price:'30$'
  },
  {
    name:'blackbox',
    price:'100$'
  }
]
const productNames = products.map(product=>product.name)
console.log(productNames);
const nayokNames = nayoks.map(nayok=>nayok)
console.log(nayokNames);
  return (
        <div className="App">
          <header className="App-header">
            <p>I am a react person </p>
            <Counter></Counter>
            <Users></Users>
            <ul>
              {
                nayoks.map(nayok=><li>{nayok}</li>)
              }
              
            </ul>
            {/* <p>i am a react peson</p>
            <Person name="munna khan" profession="doctor"></Person>
            <Person name="shahid khan" profession="business man"></Person>
            <Person name="nahid lasker" profession="engineer"></Person> */}

            {/* <Product name={products[0].name} price={products[0].price}></Product> */} 
            {
              products.map(product=><Product product={product}></Product>)
            }
            <Product product ={products[0]}></Product>
            <Product product ={products[1]}></Product>
           
          </header>
       </div>
  );
}
// function Person(props){
//   return(
//     <div style={{border:'2px solid yellow',padding:'10px',margin:'5px'}}>
//       <h5>My name:{props.name}</h5>
//       <p>about me:{props.profession}</p>
//     </div>
//   )
// }

function Product(props) {
  const productStyle={
    border : '1px solid grey',
    borderRadius :'5px',
    backgroundColor :'lightgrey',
    height :'200px',
    width :'200px',
    float :'left',
    marginBottom:'5px',
    padding:'5px'

  }
  const {name,price} =props.product ;
  
  return(
    <div style={productStyle}>
      <h6>{name}</h6>
      <h4>{price}</h4> 
      <button>buy now</button>

    </div>
  )
  
}


function Counter() {
  const[count,setCount] = useState(10);
  const handleIncrease=()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease=()=>{
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  )
}

function Users() {
  const [users,setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUsers(data));
  },[] )
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
       {
         users.map(user=><li>{user.name}</li>)
       }
      </ul>
    </div>
  )
  
}


export default App;
