import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import TopMenu from "./TopMenu/TopMenu";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Produc from "./Produc/Produc";

const Aray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Lay = Aray.map((x) => x + ",");

function Welcome(props) {
  return (
    <div>
      <h1>
        Hello, {props.name} and {props.check}
      </h1>
    </div>
  );
}

function NewComponent() {
  return (
    
    <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        {/* Team */}
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1">OUR TEAM</h5>
            <div className="row">
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
            </div>
          </div>
        </section>
        {/* Team */}
      </div>
  );
}

function App() {
  return (
    
    <div className="App">
      <TopMenu/>
      <Header/>
      <Body/>
      <Footer/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Lay}

        {Aray.map((element, index) => {
          if (element > 4) {
            return <Welcome name={index} check="Minh" />;
          }
          return <Welcome name={index} check="No" />;
        })}
        
          <Produc/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
