import React from "react";
import ppic from "./assets/ppic.jpg";
function Info() {
  return (
    <div className="container m-2">
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={ppic} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-2">About Me</h2>
          Muhammad Abdul Ahad Khan, a dedicated Computer Science student at
          UBIT, passionately immersed in the world of web and mobile app
          development. Currently pursuing a Bachelor's degree, I am committed to
          honing his skills and staying at the forefront of technology. With a
          keen eye for innovation, I aspire to contribute meaningfully to the
          ever-evolving landscape of software development.
          <h4 className="my-2 text-primary">Linkedin</h4>
          https://www.linkedin.com/in/muhammad-abdulahad-khan-5b1641234
          <h4 className="my-2 text-secondary">Github </h4>
          https://github.com/abd-bangash
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-4">
          <h2 className="mb-2">Education</h2>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header h5">Future Computer Scientist</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item h6">
                Ubit(University Of Karachi)
              </li>
              <li className="list-group-item">2021-2025</li>
              <li className="list-group-item h6">
                Adamjee Govt. Science College
              </li>
              <li className="list-group-item">2019-2021</li>
              <li className="list-group-item h6">Al-Huda School</li>
              <li className="list-group-item">till 2019</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <h2 className="mb-2">Skills</h2>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header h5">Web Development</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">Typescript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <h2 className="mb-2">Experience</h2>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header h5">Self Directed Projects</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {" "}
                Actively engaged in self-directed web development projects,
                showcasing a strong dedication to learning and applying new
                technologies. Independently developed and deployed web
                applications using technologies such as React, JavaScript, and
                Bootstrap.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
