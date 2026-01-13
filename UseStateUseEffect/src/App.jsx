import { useEffect,useState } from 'react'

  function App() {

    const [user, setUser] = useState([])

    const [search, setsearch] = useState("")
    
  // const [isRunning, setIsRunning] = useState(false);

    



    // useEffect(() => {
    //   if (!isRunning) return;
    //   const startTime = setInterval(() => {
    //     const now = new Date(Date.now());

    //      const hours = now.getHours();
    //      const minutes = now.getMinutes();
    //      const seconds = now.getSeconds();

    //      console.log(hours, minutes, seconds);

    //   }, 1000);

    //   return () => {
    //     clearInterval(startTime)
    //   }
    // }, [isRunning])

    // const increment = () => {
    //   setcount(pre => pre + 1)
    //   setIsRunning(true);
    // }


    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          setUser(data);
        }
      catch (error){
        console.error('Error fetching data:', error);
      };
      };

      fetchData();
      
    }, [])

    

    return (
      <>
    hello world
    {/* {count}
    <button onClick={increment}>Increment</button> */}


  {/* <button onClick={fetchData}>Shoe  List</button> */}

  <input type="search" value={search} onChange={(e) => setsearch(e.target.value)} />

     {search.length > 0 ? (
  <>
   <h1>Search Results</h1>
   <ul>
    {user
      .filter((usr) =>
        usr.name.toLowerCase().includes(search.toLowerCase()) ||
        usr.email.toLowerCase().includes(search.toLowerCase())
      )
      .map((usr) => (
        <li key={usr.id}>
          {usr.name} - {usr.email}
        </li>
      ))}
   </ul>
  </>
) : (
   <>
    <h1>User List</h1>
    <ul>
      {user.map((usr) => (
        <li key={usr.id}>
          {usr.name} - {usr.email}
        </li>
      ))}
    </ul>
  </>
)}

  
      </>

    )
  }

  export default App
