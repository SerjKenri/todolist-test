import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';
import TaskListItem from 'components/TaskListItem/TaskListItem';
import css from './TaskList.module.css';

const TaskList = () => {
    const taskList = useSelector(getTasks);

    return (
        <table className={css.tableS}>
            <thead className={css.tHeadS}>
                <tr>
                    <th className={css.thS}>ID</th>
                    <th className={css.thS}>TITLE</th>
                    <th className={css.thS}>DESCRIPTION</th>
                    <th className={css.thS}>STATUS</th>
                </tr>
            </thead>
            <tbody className={css.tbodyS}>
                {taskList?.map(({ id, title, description, status }) => (
                    <TaskListItem
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        status={status}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;
