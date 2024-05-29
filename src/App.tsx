import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {s} from './components/pages/_styles'

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
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
                        <Route path={PATH.PAGE1} element={PageOne()}/>
                        <Route path={PATH.PAGE2} element={PageTwo()}/>
                        <Route path={PATH.PAGE3} element={PageThree()}/>
                        <Route path={PATH.ERROR} element={Error404()}/>
                        <Route path="*" element={<Navigate to={PATH.ERROR}/>}/>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        {/*<PageOne/>*/}
                        {/*<PageTwo/>*/}
                        {/*<PageThree/>*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}




export default App;
