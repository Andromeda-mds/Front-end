import React from 'react';
import * as header from './styles';
import logo from '../../Assets/logo.svg';
import ligthLogo from '../../Assets/ligthLogo.svg';
import darkLogo from '../../Assets/darkLogo.svg';

const Header = () => {

    return(
        <header.Container>
            <header.logoDiv style={{backgroundImage: `url(${darkLogo})`}}/>
        </header.Container>
    )
}

export default Header;