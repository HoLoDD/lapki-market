import React from 'react';
import styles from './loader.module.css';
import { Spin } from 'antd';

const Loader = () => {
    return (
        <div className={styles.container}>
            <Spin className={styles.loader} size="large" />
        </div>
    );
};
export default Loader;
