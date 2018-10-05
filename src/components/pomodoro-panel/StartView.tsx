import { Component } from 'react';
import * as RX from 'reactxp';
import { Phase } from 'src/components/pomodoro-panel/PomodoroPanel';
import { SimpleButton } from 'src/widgets/button/SimpleButton';

interface StartViewProps {
    phase: Phase;
    onStart: () => void;
}

export class StartView extends Component<StartViewProps> {
    public static defaultProps: Partial<StartViewProps> = {
        phase: Phase.New,
    };

    public render() {
        const { phase, onStart } = this.props;

        return (
            <RX.View>
                <RX.View>
                    <RX.Text>Start View</RX.Text>
                </RX.View>
                <RX.View>
                    <RX.Text>Phase: {phase}</RX.Text>
                </RX.View>
                <SimpleButton onPress={onStart}>Start</SimpleButton>
            </RX.View>
        );
    }
}
