


import Posts from "./components/Posts"

// import User from './components/User'
function App() {


//   const [login, setLogin] = useState(false)


//   const [text, setText] = useState(true)

//   const arr = [1, 2, 3, 4, 5]

//   const products = ["Pencile","Rsare","Box"]

// const [list, setList] = useState(["shahbaz", "Ali", "Ahmed"]);

//  const removeItem = () => {
//     setList(prevList => prevList.slice(1)); 
//   };
  return (
    <>
      {/* {login ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
      <button onClick={() => setLogin(!login)}>
        {login ? 'Log Out' : 'Log In'}
      </button>

      <h2>{text ? "Hello World" : ''}</h2>
      <button onClick={() => setText(!text)}>
        Toogle
      </button>

      {arr.map((item,index) =>(<div key={index}>{item}</div>))}



     <ul>
      {list.length === 0 ? (
        <li>List is Empty</li>
      ) : (
        list.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))
      )}

      <button onClick={removeItem}>Remove List</button>
    </ul>



        <button onClick={()=>{products.map((items,index)=>(console.log(items)))}}>Products</button>

        <User name="Shahbaz"/> */}


        <Posts like={5} />
        <Posts like={1} />
        <Posts like={3} />
        <Posts like={0} />
        <Posts like={4} />
        <Posts like={0} />
        <Posts like={5} />
        



     



    </>
  )
}

export default App
