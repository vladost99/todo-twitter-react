import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;  
`
const AppHeader = ({amount,like}) => {
    return ( 
        <Header>
            <h1>Vlad</h1>
    <h2>{amount} записей, из них понравилось {like}</h2>
        </Header>
    )
}

export default AppHeader;