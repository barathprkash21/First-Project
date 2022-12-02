import logo192 from './logo192.png'
import imag from './images/download.jpg'
function App() {

  return (
<div className='container-fluid'>
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo192} alt="logo" style={{ width: '70px', height: '70px' }}/>
    </a>
    <h3 className='navbar-brand'>Gallery App  </h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
<div class="container text-center">
  <div class="row">
    <div class="col-6 pa-10 col-sm-3">
    <a className="navbar-brand" href="/"><img src={imag} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }}/></a>
      </div>
    <div class="col-6 col-sm-3"><a className="navbar-brand" href="/"><img src={imag} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }}/>
    </a></div>
    <div class="col-6 col-sm-3"><a className="navbar-brand" href="/"><img src={imag} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }}/>
    </a></div>
    <div class="col-6 col-sm-3"><a className="navbar-brand" href="/"><img src={imag} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }}/>
    </a></div>
  </div>
</div>


</div>


  )
}

export default App;
