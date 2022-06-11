import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Web Junkies">
      <h1>Web Junkies</h1>
      {/* New mobile menu */}
      <div className="new-nav">
        <div className="new-nav-logos">
          <a><i className="fa-solid fa-1"></i></a>
          <a className="x-symbol"><i className="fa-solid fa-x"></i></a>
        </div>
        <div className="new-nav-links">
          <ul>
            <a href=""><li>Shop</li></a>
            <a href=""><li>Mission</li></a>
            <a href=""><li>Community</li></a>
            <a href=""><li>Sponsors</li></a>
            <a href=""><li>Impact</li></a>
          </ul>
        </div>
      </div>
      { /* My Stuff */ }
      <nav>
        <div className="nav-logo">
          <a href="#">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-1"></i>
            <h4>One Mission</h4>
          </a>
          {/* <ul>
            <a href=""><i class="fa-solid fa-bars"></i></a>
            <a href=""><i class="fa-solid fa-circle-half-stroke"></i></a>
            <a href=""><h4>Bulwark</h4></a>
          </ul> */} 
        </div>
        <div className="nav-links">
          <ul>
            <a href=""><li>Shop</li></a>
            <a href=""><li>Mission</li></a>
            <a href=""><li>Community</li></a>
            <a href=""><li>Sponsors</li></a>
            <a href=""><li>Impact</li></a>
          </ul>
        </div>
        <div className="nav-contact">
          <a href="">
            <h4>Contact us</h4>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </nav>
      <main className="main">
        <section className="intro">
          <h1>Tell the world your<br>One Mission</h1>
          <div className="intro-desc">
            <p>Everyone has a Mission they want to achieve and reach.</p>
            <div className="intro-buttons">
              <button>Shop</button>
              <button>Mission</button>
            </div>
          </div>
        </section>
        <section className="social-proof">
          <img className="photo1" src="images/phonto1.JPG" alt="">
          <img className="photo2" src="images/phonto2.PNG" alt="">
          <img className="photo3" src="images/phonto3.PNG" alt="">
        </section>
      </main>
    </div>
  );
}

//.......

export default App;
