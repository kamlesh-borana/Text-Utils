import React from "react";

const About = (props) => {

  const myStyle = {
    color: props.darkMode?"#fff":"#212529",
    backgroundColor: props.darkMode?"#060d36":"#fff"
  }

  return (
    <div className="container">
      <h2 className="text-center my-5">About KB-TextUtils</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyse Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              KB-TextUtils gives you a way to analyze your text quickly and
              efficiently. It lets you count words, count characters or the
              reading time required. Thus it is suitable for writing text with
              word / charecter limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Manipulate Your Text
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              KB-TextUtils is a text utility that helps you manipulate the text.
              You can perform all sorts of tasks on your texts like removing
              extra spaces, and changing its casing to upper, lower or
              capitalize. Then you can finally copy the result with a click and
              use it wherever you need it.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              KB-TextUtils is a free text utility app that provides you a
              instant charecter count and word count statics for your given
              text. Along with that it provides you you with a bunch free
              manipulation tool to manipulate your text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              KB-TextUtils is text utility app that is compatible and works in
              any web browser such as Chrome, Firefox, Edge, Safari, Opera,
              Brave, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
