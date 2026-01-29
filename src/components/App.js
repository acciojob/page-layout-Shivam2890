
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout header="Welcome to my website"
        content="This is content of my website."
        footer="© 2023 My Website. All Right reserved."
      />

    </div>
  )
}

export default App
