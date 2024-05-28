import './App.css';

function App(images) {
  // code here
    return (
      <div className="Container">
        {
          images.data.map(image=>(
            <img src={image.img}/>
          ))
        }
      </div>
      );
}

export default App;