import * as RX from 'reactxp';
import { PomodoroPanel } from 'src/components/pomodoro-panel/PomodoroPanel';

export class App extends RX.Component {
    public render() {
        return (
            <PomodoroPanel />
        );
    }
}
