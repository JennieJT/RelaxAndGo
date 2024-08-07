import { useEffect, useState } from 'react';
import localforage from 'localforage';

const useStopwatch = (initialTime: number = 0, section) => {
    const [elapsedTime, setElapsedTime] = useState(initialTime);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: number | null = null;

        if (isRunning) {
            const startTimestamp = startTime ?? (new Date().getTime() - elapsedTime * 1000);

            timer = window.setInterval(() => {
                const now = new Date().getTime();
                setElapsedTime(Math.floor((now - startTimestamp) / 1000));
            }, 1000);

            setStartTime(startTimestamp);
        } else {
            setStartTime(null);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isRunning]);

    useEffect(()=>{
        const loadElapsedTime = async() => {
            const storedTime = await localforage.getItem<number>(`elapsedTime-${section}`)
            if(storedTime != null){
                setElapsedTime(storedTime)
            }
        }
        loadElapsedTime();
    },[])
    useEffect(()=>{
        localforage.setItem(`elapsedTime-${section}` , elapsedTime);
    }, [elapsedTime]);
    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = async () => {
        setIsRunning(false);
        setElapsedTime(initialTime);
        setStartTime(null);
        await localforage.removeItem("elapsedTime")
    };

    const toggle = () => {
        isRunning ? stop() : start();
    };

    function FormatTime(seconds: number){
        const getSeconds = `0${seconds % 60}`.slice(-2);
        const minutes = Math.floor(seconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const hours = Math.floor(seconds / 3600);
        const getHours = `0${hours % 24}`.slice(-2);
        const getDays = Math.floor(seconds / 86400); // 86400 seconds in a day
        return (
            <div className='flex flex-row'>
                {getDays > 0 && <div className = "w-6"> {getDays} </div>}
                {getDays > 0 && <div className = 'w-6'>days</div> }
                {hours > 0 && <div className = "w-6"> {getHours} </div>}
                {hours > 0 && <div className = 'w-6'>min</div> }
                {minutes > 0 && <div className = "w-6"> {getMinutes} </div>}
                {minutes > 0 && <div className = 'w-6'>min</div> }
                <div className = "w-6"> {getSeconds} </div>
                <div className = 'w-2'>s</div> 
            
            </div>
        ) 
    }
    return { elapsedTime, isRunning, start, stop, reset, toggle, FormatTime };
};

export default useStopwatch;