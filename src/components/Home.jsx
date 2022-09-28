import React from "react";
import TextForm from "./TextForm";

const Home = (props) => {
  return (
    <div className="container">
      <TextForm
        heading="KB-TextUtils a Text Utility App"
        darkMode={props.darkMode}
      />
    </div>
  );
};

export default Home;
