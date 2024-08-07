import { useEffect, useState } from "react";

const Watch: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-row">
            <div className = 'pr-2'>{date.toLocaleDateString()}</div>
            <div className = "w-5">{date.getHours().toString().padStart(2,'0')}</div>
            :
            <div className = "w-5">{date.getMinutes().toString().padStart(2,'0')}</div>
            :
            <div className = "w-5">{date.getSeconds().toString().padStart(2,'0')}</div>
        </div>
    );
};

export default Watch;
