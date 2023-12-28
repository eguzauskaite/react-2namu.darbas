import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Title</h1>
        <p>Some abuot text</p>
        <p>in two lines</p>
         <button>Button</button>
      </header>
      <div className='main'>
        <div className='about'>
           <h2>Portfolio</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi rerum veniam, eius voluptatibus voluptatum repellat nemo consequuntur commodi culpa facere totam alias quam.</p>
        </div>
        <div className='card-container'>

          <div className='card'>
            <img src="portret.img-1.jpg" alt="" />
            <div className='card-content'>
              <h4>Ipsum Feugiat</h4>
            </div>
          </div>

          <div className='card'>
            <img src="portret.img-1.jpg" alt="" />
            <div className='card-content'>
              <h4>Ipsum Feugiat</h4>
            </div>
          </div>

          <div className='card'>
            <img src="portret.img-1.jpg" alt="" />
            <div className='card-content'>
              <h4>Ipsum Feugiat</h4>
            </div>
          </div>

          <div className='card'>
            <img src="portret.img-2.jpg" alt="" />
            <div className='card-content'>
              <h4>Ipsum Feugiat</h4>
            </div>
          </div>

          <div className='card'>
            <img src="portret.img-2.jpg" alt="" />
            <div className='card-content'>
              <h4>Ipsum Feugiat</h4>
            </div>
          </div>

          <div className='card'>
            <img src="portret.img-2.jpg" alt="" />
            <div className='card-content'>
              <h4>Ipsum Feugiat</h4>
            </div>
          </div>

        </div>
      </div>
     
    </>
  )
}

export default App
