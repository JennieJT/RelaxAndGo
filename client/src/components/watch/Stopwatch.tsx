import React, { useEffect } from 'react';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import useStopwatch from '../../hooks/useStopWatch';

interface StopwatchProps {
    initialTime?: number;
    scene?: string;
}

const Stopwatch: React.FC<StopwatchProps> = ({ initialTime = 0, scene = "None"}) => {
    const { elapsedTime, toggle, reset, FormatTime } = useStopwatch(initialTime, scene);

    return (
        <div className='flex flex-row align-middle justify-center'>
            <button className="py-0 bg-transparent px-1 text-sm" onClick={toggle}>
                {FormatTime(elapsedTime)}
            </button>
            <button className="py-0 bg-transparent p-0 text-sm" onClick={reset}>
                <RestartAltSharpIcon />
            </button>
        </div>
    );
};

export default Stopwatch;
