import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class MyProfile extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(" ")[0];
    return (
      //       <div classNameName="row">
      //         <div classNameName="col-md-12">
      //           <div classNameName="card card-body bg-info text-white mb-3">
      //             <div classNameName="row">
      //               <div classNameName="col-4 col-md-3 m-auto">
      //                 <img classNameName="rounded-circle" src={profile.avatar} alt="" />
      //               </div>
      //             </div>
      //             <div classNameName="text-center">
      //               <h1 classNameName="display-4 text-center">{profile.user.name}</h1>
      //               <h3 classNameName="text-center text-info">{firstName}'s Bio</h3>
      //               <p classNameName="lead">
      //                 {isEmpty(profile.bio) ? (
      //                   <span>{firstName} does not have a bio</span>
      //                 ) : (
      //                   <span>{profile.bio}</span>
      //                 )}
      //               </p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     );
      //   }
      // }
      <div className="container container-profile">
        <div className="row">
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-8">
                    <h2>{profile.user.name}</h2>
                    <p>
                      <strong>Age: </strong> {profile.age}{" "}
                    </p>
                    <p>
                      <strong>Location: </strong> {profile.location}{" "}
                    </p>
                    <p>
                      <strong>Looking For: </strong> {profile.lookingFor}{" "}
                    </p>
                    <p>
                      <strong>Bio: </strong> {profile.bio}{" "}
                    </p>
                    <p>
                      <strong>Favorite Genres: </strong>
                      <span className="label label-info tags">html5</span>
                      <span className="label label-info tags">css3</span>
                      <span className="label label-info tags">jquery</span>
                      <span className="label label-info tags">bootstrap3</span>
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-4 text-center">
                    <img
                      src="http://api.randomuser.me/portraits/men/49.jpg"
                      alt=""
                      className="center-block img-circle img-responsive"
                    />
                    <ul
                      className="list-inline ratings text-center"
                      title="Ratings"
                    >
                      <li>
                        <a href="#">
                          <span className="fa fa-star fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star fa-lg" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xs-12 col-sm-4">
                    <h2>
                      <strong> 20,7K </strong>
                    </h2>
                    <p>
                      <small>Followers</small>
                    </p>
                    <button className="btn btn-success btn-block">
                      <span className="fa fa-plus-circle" /> Follow{" "}
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <h2>
                      <strong>245</strong>
                    </h2>
                    <p>
                      <small>Following</small>
                    </p>
                    <button className="btn btn-info btn-block">
                      <span className="fa fa-user" /> View Profile{" "}
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <h2>
                      <strong>43</strong>
                    </h2>
                    <p>
                      <small>Snippets</small>
                    </p>
                    <button type="button" className="btn btn-primary btn-block">
                      <span className="fa fa-gear" /> Options{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyProfile;
