import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import "./footer.css";
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box className="footer">
        <Box className="firstcol">
            <h2>FSB İnşaat</h2>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dignissimos commodi ullam at, magnam explicabo aut? Aspernatur magni ex illo quia, cupiditate repellendus sit neque aperiam repellat quibusdam dolor laborum!</p>
        </Box>
        <Box className="secondcol">
            <h2>Hakkımızda</h2>
            <hr />
            <p>Detaylı Bilgi İçin</p>
            <Nav.Link style={{color:'#FBFBFB'}} href='/about'>
                Hakkımızda
            </Nav.Link>
        </Box>
        <Box className="thirdcol">
            <h2>İletişim</h2>
            <hr />
            <ul>
                <li>+90 000 111 22 33</li>
                <li>lorem@gmail.com</li>
                <li>Adres1 adres2 adres3</li>
            </ul>            
        </Box>        
    </Box>
  );
};

export default Footer;
