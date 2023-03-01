import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatus } from 'redux/task';
import { useCallback, useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './TaskListItem.module.css';

const TaskListItem = React.memo(({ id, title, description, status }) => {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleToggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    const handleToggleStatus = useCallback(() => {
        dispatch(toggleStatus(id));
    }, [dispatch, id]);

    return (
        <>
            <tr>
                <td className={css.tdS} onClick={handleToggleModal}>
                    {id}
                </td>
                <td className={css.tdS} onClick={handleToggleModal}>
                    {title}
                </td>
                <td className={css.tdS} onClick={handleToggleModal}>
                    {description}
                </td>
                <td className={css.tdS}>
                    <input
                        className={css.inputS}
                        type="checkbox"
                        name="status"
                        checked={status}
                        onChange={handleToggleStatus}
                    />
                </td>
            </tr>
            {isModalOpen && (
                <Modal
                    title={title}
                    description={description}
                    status={status}
                    onClose={handleToggleModal}
                    onStatus={handleToggleStatus}
                />
            )}
        </>
    );
});

export default TaskListItem;
