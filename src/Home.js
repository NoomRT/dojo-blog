import { useState } from 'react';

const Home = () => {
   // let name = 'Noom';
   const [name, setName] = useState('Noom');
   const [age, setAge] = useState(25);

   const handleClick = () => {
      setName('Nim');
      setAge(30);
   };

    return ( 
        <div className="home">
           <h2>Homepage</h2> 
           <p>{ name } is { age } years old</p>
           <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;