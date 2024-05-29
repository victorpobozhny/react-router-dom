import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Route, Routes} from 'react-router-dom';


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path={'page_1'} element={PageOne()}/>
                        <Route path={'page_2'} element={PageTwo()}/>
                        <Route path={'page_3'} element={PageThree()}/>
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
