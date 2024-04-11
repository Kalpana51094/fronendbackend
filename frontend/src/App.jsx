import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'



// function App() {
//   const [jokes, setJokes] =useState([])

//   useEffect(()=>{
//     axios.get('http://localhost:4000/jokes')
//     .then ((response) =>{
//       setJokes(response.data)
//     }
//     )
//     .catch((error)=>{
//     console.log(error)
//     }
//     )
//   })
//   return (
//     <>
//       <h1>Chai aur Fullstack</h1>
//       <p>JOKES: {jokes.length}</p>
//       {
//         jokes.map((joke,index)=>(
//           <div key={joke.id}>
//             <h3>{joke.title}</h3>
//             <p>{joke.content}</p>
//           </div>
//         ))
//       }
//     </>
//   )
// }

// export default App

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data);
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []) // Don't forget to add an empty dependency array here to avoid infinite loops

  return (
    <>
      <h1>Chai aur Fullstack</h1>
      <p>JOKES: {jokes.length}</p> {/* Corrected here */}
      {
        jokes.map((joke, id) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;



