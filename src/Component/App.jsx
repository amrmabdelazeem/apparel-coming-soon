import React from "react";
import Logo from "./Logo.jsx";
// import Hero from "./Hero.jsx";
import Heading from "./Heading.jsx";
import TextBody from "./TextBody.jsx";
import Input from "./Input.jsx";



function App(){
    return <main>
    <div className="container">
    <Logo />
    <div className="image-container">
    </div>
    <div className="page-container">
    <Heading/>
    <TextBody />
    <Input />
    </div>
    </div>
    </main>
}

export default App;