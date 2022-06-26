import { useEffect, useState } from 'react';
import { robotsDb } from '../axios/axios';
import { iRobot } from '../models/robot.Model';
export function Home() {
    const [robots, setRobots] = useState([] as iRobot[]);
    useEffect(() => {
        robotsDb(setRobots);
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {robots !== null ? (
                robots.map((robot) => <p key={robot.id}>{robot.name}</p>)
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
