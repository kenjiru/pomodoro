import { Component } from 'react';
import * as RX from 'reactxp';
import { SimpleButton } from 'src/widgets/button/SimpleButton';

interface TimerViewProps {
    onCancel: () => void;
    onFinish: () => void;
}

const FINISH_TIMEOUT = 5000;

export class TimerView extends Component<TimerViewProps> {
    private timer: number = 0;

    public componentDidMount() {
        this.timer = setTimeout(this.props.onFinish, FINISH_TIMEOUT);
    }

    public componentWillUnmount() {
        clearTimeout(this.timer);
    }

    public render() {
        const { onCancel } = this.props;

        return (
            <RX.View>
                <RX.View>
                    <RX.Text>Timer View</RX.Text>
                </RX.View>
                <SimpleButton onPress={onCancel}>Cancel</SimpleButton>
            </RX.View>
        );
    }
}
