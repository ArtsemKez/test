import React from 'react'
import style from './Header.module.css';


export const Header = () => {

    return (
        <>
            <header className={style.header}>
                <div className='wrapper'>
                    <div className={style.headerBody}>
                        <nav className={style.headerMenu}>
                            <ul className={style.headerList}>
                                <li>
                                    <a href='null' className={style.headerLink}>Элемент 1</a>
                                </li>
                                <li>
                                    <a href='null' className={style.headerLink}>Элемент 2</a>
                                    <ul  className={style.subHeaderList}>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 2.1</a>
                                        </li>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 2.2</a>
                                            <ul className={style.subSubHeaderList}>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.2.1</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.2.2</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.2.3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 2.3</a>
                                        </li>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 2.4</a>
                                            <ul className={style.subSubHeaderList}>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.1</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.2</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.3</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.4</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.4</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.6</a>
                                                </li>
                                                <li>
                                                    <a href='null' className={style.subSubHeaderLink}>Элемент 2.4.7</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 2.5</a>
                                        </li>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 2.6</a>
                                        </li>
                                    </ul>

                                </li>
                                <li>
                                    <a href='null' className={style.headerLink}>Элемент 3</a>
                                </li>
                                <li>
                                    <a href='null' className={style.headerLink}>Элемент 4</a>
                                    <ul className={style.subHeaderList}>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 4.1</a>
                                        </li>
                                        <li>
                                            <a href='null' className={style.subHeaderLink}>Элемент 4.2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href='null' className={style.headerLink}>Элемент 5</a>
                                </li>
                                <li>
                                    <a href='null' className={style.headerLink}>Элемент 6</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}

