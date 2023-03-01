import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import css from './Modal.module.css';

const mRoot = document.querySelector('#modal_root');

function Modal({ title, description, status, onClose, onStatus }) {
    const modelKeyClose = useCallback(handleKeydownClose, [handleKeydownClose]);

    useEffect(() => {
        window.addEventListener('keydown', modelKeyClose);
        return () => {
            window.removeEventListener('keydown', modelKeyClose);
        };
    }, [modelKeyClose]);

    function handleKeydownClose(event) {
        if (event.code === 'Escape') {
            onClose();
        }
    }

    return createPortal(
        <div className={css.Overlay}>
            <div className={css.Modal}>
                <h1 className={css.Title}>{title}</h1>
                <h2>Description:</h2>
                <p>{description}</p>
                Status:{' '}
                <input
                    type="checkbox"
                    name="status"
                    checked={status}
                    onChange={onStatus}
                />
                <button className={css.Close} onClick={onClose} type="button">
                    close
                </button>
            </div>
        </div>,
        mRoot
    );
}

export default Modal;
