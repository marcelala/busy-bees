import { Container } from "@material-ui/core";

export default function Header(){
    const imageObject = require(`../assets/logo.png`);
    const imageURL = imageObject.default;
return (
    <Container>
    <header className="logo-container">
    
        <img src={imageURL} className="logo" alt="bees" />
        
    </header>
    
    </Container>
);
}