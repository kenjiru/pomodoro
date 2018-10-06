import { Provider } from 'mobx-react/native';
import * as RX from 'reactxp';
import { PomodoroPanel } from 'src/components/pomodoro-panel/PomodoroPanel';
import { sessionsStore } from 'src/model/SessionsStore';
import { settingsStore } from 'src/model/SettingsStore';

export class App extends RX.Component {
    public render() {
        return (
            <Provider
                sessionsStore={sessionsStore}
                settingsStore={settingsStore}
            >
                <PomodoroPanel />
            </Provider>
        );
    }
}
