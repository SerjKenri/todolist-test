import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { addNewTask } from 'redux/task';
import { useState } from 'react';
import css from './TaskForm.module.css';

const TaskForm = () => {
    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (title === '') {
            setTitleError(true);
            return;
        } else if (description === '') {
            setDescriptionError(true);
            return;
        } else {
            const newTask = {
                id: tasks.length + 1,
                title,
                description,
                status: false,
            };
            dispatch(addNewTask(newTask));
            setTitle('');
            setDescription('');
        }
    };

    const handleTitleChange = e => {
        setTitleError(false);
        const titleText = e.target.value;
        setTitle(titleText);
    };

    const handleDescriptionChange = e => {
        setDescriptionError(false);
        const descriptionText = e.target.value;
        setDescription(descriptionText);
    };

    return (
        <form
            className={css.formContainer}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <label className={css.labelS}>
                Title:{' '}
                {titleError && (
                    <div style={{ color: 'red' }}>This field is empty</div>
                )}
            </label>
            <input
                className={css.inputS}
                type="text"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={handleTitleChange}
            />

            <label className={css.labelS}>
                Description:{' '}
                {descriptionError && (
                    <div style={{ color: 'red' }}>This field is empty</div>
                )}
            </label>
            <input
                className={css.inputS}
                type="text"
                name="description"
                placeholder="Enter description"
                value={description}
                onChange={handleDescriptionChange}
            />

            <button className={css.buttonS} type="submit">
                Create
            </button>
        </form>
    );
};

export default TaskForm;
