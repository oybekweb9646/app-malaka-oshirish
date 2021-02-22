import React, {Component} from 'react';
import NavbarPart from "./NavbarPart";
import NavbarBottom from "./NavbarBottom";
import LogosPart from "./LogosPart";
import IconsPart from "./IconsPart";
import Center from "./Center";
import CardsPart from "./CardsPart";
import ManBluePart from "./ManBluePart";
import Karousel from "./Karousel";
import FooterPart from "./FooterPart";
class MainPage extends Component {
    render() {
        return (
            <div>
                <NavbarPart/>
                <NavbarBottom/>
                <LogosPart/>
                <IconsPart/>
                <Center/>
                <CardsPart/>
                <ManBluePart/>
                <Karousel/>
                <FooterPart/>
            </div>
        );
    }
}

export default MainPage;