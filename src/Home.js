const Home = () => {

   const handleClick = (e) => {
      console.log('hello, Noom', e);
   };

   const handleClickAgain = (name, e) => {
      console.log('hello ' + name, e.target);
   };

    return ( 
        <div className="home">
           <h2>Homepage</h2> 
           {/* use function reference to invoke the function each times*/}
           <button onClick={handleClick}>Click me</button>
           {/* use anonymous function to invoke function that have parameter */}
           <button onClick={(e) => handleClickAgain('Noom', e)}>Click me again</button>
           {/* access to the event object or the event parameter by input e in parameter */}
        </div>
     );
}
 
export default Home;