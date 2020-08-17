import React, { useEffect, useState } from 'react';

function Profile({userId}) {
    const [user, setUser] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data));
    }, [userId]);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
}

function Profile1({userId}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data));
    }, [userId]);

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
}

function Profile2({userId}) {
    const user = useUser(userId);
    const width = useWindowWidth();
}

function useUser(userId) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data));
    }, [userId]);
    return user;
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [])
}

function getUserApi() {
    return Promise.resolve();
}