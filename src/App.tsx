import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {s} from './components/pages/_styles'
import Model from "./components/pages/Model";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/error404'
} as const


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <s.NavWrapper>
                        <NavLink to={PATH.PAGE1}>
                            Page_1
                        </NavLink>
                    </s.NavWrapper>
                    <s.NavWrapper>
                        <NavLink to={PATH.PAGE2}>
                            Page_2
                        </NavLink>
                    </s.NavWrapper>
                    <s.NavWrapper>
                        <NavLink to={PATH.PAGE3}>
                            Page_3
                        </NavLink>
                    </s.NavWrapper>
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path={PATH.PAGE1} element={Adidas()}/>
                        <Route path={PATH.PAGE2} element={Puma()}/>
                        <Route path={PATH.PAGE3} element={Abibas()}/>
                        <Route path={PATH.ERROR} element={Error404()}/>
                        <Route path="*" element={<Navigate to={PATH.ERROR}/>}/>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={`adidas/:id`}
                               element={
                                   <Model/>
                               }/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
