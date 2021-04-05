
import { Link } from "react-router-dom";

export default function Header(){
    const imageObject = require(`../assets/logo.png`);
    const imageURL = imageObject.default;
return (
    <div className="container">
    <header className="App-header">
    <Link to="/">
        <img src={imageURL} className="App-logo" alt="bees" />
    </Link>
    </header>
</div>
);
}