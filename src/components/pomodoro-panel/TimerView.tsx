import { inject, observer } from 'mobx-react/native';
import { Component } from 'react';
import * as RX from 'reactxp';
import { formatTime, SECONDS_PER_MINUTE } from 'src/components/pomodoro-panel/TimerService';
import { SettingsStore } from 'src/model/SettingsStore';
import { SimpleButton } from 'src/widgets/button/SimpleButton';

const ONE_SECOND = 1000;

interface TimerViewProps {
    onCancel: () => void;
    onFinish: () => void;
    settingsStore?: SettingsStore;
}

interface TimerViewState {
    passedSeconds: number;
}

@inject('settingsStore')
@observer
export class TimerView extends Component<TimerViewProps, TimerViewState> {
    private tickTimer: number = 0;

    constructor(props: TimerViewProps) {
        super(props);

        this.state = {
            passedSeconds: 0,
        };
    }

    public componentDidMount() {
        this.startTimer();
    }

    public componentWillUnmount() {
        this.stopTimer();
    }

    public render() {
        const { onCancel } = this.props;

        return (
            <RX.View>
                <RX.View>
                    <RX.Text>Timer View</RX.Text>
                </RX.View>
                <RX.View>
                    <RX.Text>{this.getTime()}</RX.Text>
                </RX.View>
                <SimpleButton onPress={onCancel}>Cancel</SimpleButton>
            </RX.View>
        );
    }

    private getTime() {
        const remainingSeconds = this.getSessionDuration() - this.state.passedSeconds;

        return formatTime(remainingSeconds);
    }

    private startTimer() {
        this.tickTimer = setInterval(this.nextTick, ONE_SECOND);
    }

    private nextTick = () => {
        const { passedSeconds } = this.state;

        if (passedSeconds === this.getSessionDuration()) {
            this.finishSession();
        } else {
            this.setState({
                passedSeconds: this.state.passedSeconds + 1,
            });
        }
    }

    private getSessionDuration() {
        const { settingsStore } = this.props;

        return settingsStore!.getSessionDuration() * SECONDS_PER_MINUTE;
    }

    private finishSession() {
        this.stopTimer();
        this.props.onFinish();
    }

    private stopTimer() {
        clearInterval(this.tickTimer);
    }
}
