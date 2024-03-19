import { FC } from 'react';
interface Props {
    open: boolean;
    onClose: () => void;
    teskGroup?: string;
}
declare const TaskCreateDialog: FC<Props>;
export default TaskCreateDialog;
