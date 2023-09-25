import React, { Component } from 'react'
const ArayP= ["Duyên","oi","coc","xoai","cam","quyet"];
const Lay = ArayP.map((x) => x + ",");


export default class Produc extends Component {
  render() {
    return (
        <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        {/* Team */}
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1">OUR TEAM</h5>
            {ArayP.map((element, index) => {
          return <div>
            <div className="row">
              {/* Team member */}
              
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" alt="card image" /></p>
                          <h4 className="card-title">{element}</h4>
                          <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                       {/* Team */}
        
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <div className="card-title">{element}</div>
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
          </div>
          
              {/* ./Team member */}
            </div>
        })}


          </div>
        </section>
     

      </div>    
      )
  }
}
