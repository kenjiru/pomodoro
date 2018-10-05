import { Component } from 'react';
import * as RX from 'reactxp';
import { StartView } from 'src/components/pomodoro-panel/StartView';
import { TimerView } from 'src/components/pomodoro-panel/TimerView';
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

interface PomodoroPanelState {
    phase: Phase;
}

export class PomodoroPanel extends Component<{}, PomodoroPanelState> {
    constructor(props: {}) {
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
    };

    private handleCancelTimer = () => {
        this.setState({
            phase: Phase.Canceled,
        });
    };

    private handleFinishTimer = () => {
        this.setState({
            phase: Phase.Finished,
        });
    };
}
