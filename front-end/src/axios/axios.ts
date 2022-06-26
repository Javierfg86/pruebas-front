import axios from 'axios';
import { SetStateAction } from 'react';
import { iRobot } from '../models/robot.Model';

export const robotsDb = async (state: {
    (value: SetStateAction<iRobot[]>): void;
    (arg0: any): void;
}) => {
    const response = await axios.get('http://localhost:3400/robots');
    state(response.data);
};
