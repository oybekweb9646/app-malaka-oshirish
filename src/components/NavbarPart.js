import React, {useState} from 'react';
import {
    Button, ButtonDropdown,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupText,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap";



function NavbarPart(props) {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle2 = () => setOpen(!dropdownOpen);




    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
<div className="border-bottom">
            <div className="container navbarPart">
                        <Navbar color="white" light expand="lg">
                            <NavbarBrand>
                                <img src="images/brand.png" alt=""/>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle}/>
                            <Collapse isOpen={isOpen} navbar>


<Button color="white" className=" d-flex align-items-center">
    <span className="icon iconmenu"></span>
    <h6 className="mb-1 ml-2">Категории</h6>
</Button>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><span className="icon iconsearch bg-dark"></span></InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="username" />
                                </InputGroup>
                                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle2} className="border-0 text-dark">
                                    <DropdownToggle caret className="bg-white border-0 text-dark">
                                        Русский
                                    </DropdownToggle>
                                    <DropdownMenu className="border-0">
                                        <DropdownItem >English</DropdownItem>
                                        <DropdownItem >O'zbek</DropdownItem>
                                        <DropdownItem >Русский</DropdownItem>

                                    </DropdownMenu>
                                </ButtonDropdown>
                                <Button color="aqua" className="d-flex aqua align-items-center">
                                    <span className="icon iconman bg-white"></span>
                                    <h6 className="mb-1 ml-2 text-white">Войти в аккаунт</h6>
                                </Button>
                            </Collapse>
                        </Navbar>
            </div>
</div>

    );
}

export default NavbarPart;