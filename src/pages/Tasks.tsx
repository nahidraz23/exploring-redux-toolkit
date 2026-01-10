import { selectFilter, selectTask } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';

const Tasks = () => {

    const tasks = useAppSelector(selectTask);
    const filter = useAppSelector(selectFilter);

    console.log(tasks);

    return (
        <div>
            <h1>This is Task Component</h1>
        </div>
    );
};

export default Tasks; 