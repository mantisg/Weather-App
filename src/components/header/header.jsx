import React from 'react';

import styles from './header.css';

const Header = () => (
    <h1 className={styles.heading}>
        <span className={styles.light}>Weather</span> Forecast
    </h1>
);

export default Header;