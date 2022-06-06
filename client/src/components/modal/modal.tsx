import React, { Dispatch, FC, ReactNode } from 'react';
import styles from './modal.module.css';

interface Props {
    children: ReactNode;
    visible: boolean;
    setVisible: Dispatch<boolean>;
}

const Modal: FC<Props> = ({ children, visible, setVisible }) => {
    const rootClasses = [styles.modal];

    if (visible) {
        rootClasses.push(styles.active);
    }

    return visible ? (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
