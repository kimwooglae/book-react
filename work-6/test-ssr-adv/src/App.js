import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import styled from 'styled-components';
import Icon from './icon.png';

const Container = styled.div`
    background-color: #aaaaaa;
    border: 1px solid black;
`;


function fetchUsername() {
    const usernames = ['mike', 'jume', 'jasmin'];
    return new Promise(resolve => {
        const username = usernames[Math.floor(Math.random() * 3)];
        setTimeout(() => resolve(username), 100);
    });
}

export default function App({ page }) {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetchUsername().then(data => setUsername(data));
    }, []);
    const [page1, setPage1] = useState(page);
    useEffect(() => {
        window.onpopstate = event => {
            setPage(event.state);
        };
    }, []);
    function onChangePage(e) {
        const newPage = e.target.dataset.page;
        window.history.pushState(newPage, '', `/${newPage}`);
        setPage1(newPage);
    }

    const PageComponent = page1 === 'home' ? Home : About;
    return (
        <Container>
            <button data-page="home" onClick={onChangePage}>
                Home
            </button>
            <button data-page="about" onClick={onChangePage}>
                About
            </button>
            <PageComponent username={username}/>
            <img src={Icon} />
        </Container>
    )
}