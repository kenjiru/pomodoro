import { inject, observer } from 'mobx-react/native';
import { Component } from 'react';
import * as RX from 'reactxp';
import { StartView } from 'src/components/pomodoro-panel/StartView';
import { TimerView } from 'src/components/pomodoro-panel/TimerView';
import { SessionsStore } from 'src/model/SessionsStore';
import { SettingsStore } from 'src/model/SettingsStore';
import { constants } from 'src/util/StyleConstants';
import { Panel } from 'src/widgets/panel/Panel';

const styles = {
    panel: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: 'column',
        paddingTop: constants.MEDIUM_SPACING,
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
    }),
};

export const enum Phase {
    New = 'New',
    Running = 'Running',
    Finished = 'Finished',
    Canceled = 'Canceled',
}

interface PomodoroPanelProps {
    sessionsStore?: SessionsStore;
    settingsStore?: SettingsStore;
}

interface PomodoroPanelState {
    phase: Phase;
}

@inject('sessionsStore')
@inject('settingsStore')
@observer
export class PomodoroPanel extends Component<PomodoroPanelProps, PomodoroPanelState> {
    constructor(props: PomodoroPanelProps) {
        super(props);

        this.state = {
            phase: Phase.New,
        };
    }

    public render() {
        return (
            <Panel style={styles.panel}>
                <RX.Text>Pomodoro Panel</RX.Text>
                {this.renderContent()}
            </Panel>
        );
    }

    private renderContent() {
        const { phase } = this.state;

        if (phase === Phase.Running) {
            return (
                <TimerView
                    onCancel={this.handleCancelTimer}
                    onFinish={this.handleFinishTimer}
                />
            );
        }

        return (
            <StartView
                phase={phase}
                onStart={this.handleStart}
            />
        );
    }

    private handleStart = () => {
        this.setState({
            phase: Phase.Running,
        });
    }

    private handleCancelTimer = () => {
        this.setState({
            phase: Phase.Canceled,
        });
    }

    private handleFinishTimer = () => {
        this.addSession();
        this.finishPhase();
    }

    private addSession() {
        const { sessionsStore, settingsStore } = this.props;
        const sessionDuration = settingsStore!.getSessionDuration();

        sessionsStore!.addSession(sessionDuration);
    }

    private finishPhase() {
        this.setState({
            phase: Phase.Finished,
        });
    }
}
