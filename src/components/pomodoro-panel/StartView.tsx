import { inject, observer } from 'mobx-react/native';
import { Component } from 'react';
import * as RX from 'reactxp';
import { Phase } from 'src/components/pomodoro-panel/PomodoroPanel';
import { SessionsStore } from 'src/model/SessionsStore';
import { SimpleButton } from 'src/widgets/button/SimpleButton';

interface StartViewProps {
    phase: Phase;
    onStart: () => void;
    sessionsStore?: SessionsStore;
}

@inject('sessionsStore')
@observer
export class StartView extends Component<StartViewProps> {
    public static defaultProps: Partial<StartViewProps> = {
        phase: Phase.New,
    };

    public render() {
        const { phase, onStart, sessionsStore } = this.props;
        const numSessions = sessionsStore!.getSessions().length;

        return (
            <RX.View>
                <RX.View>
                    <RX.Text>Start View</RX.Text>
                </RX.View>
                <RX.View>
                    <RX.Text>Number of sessions: {numSessions}</RX.Text>
                </RX.View>
                <RX.View>
                    <RX.Text>Phase: {phase}</RX.Text>
                </RX.View>
                <SimpleButton onPress={onStart}>Start</SimpleButton>
            </RX.View>
        );
    }
}
