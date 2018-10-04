import { ReactElement } from 'react';
import * as RX from 'reactxp';
import { TextStyleRuleSet } from 'reactxp/dist/common/Types';
import { StyleRuleSetRecursive, ViewStyleRuleSet } from 'reactxp/src/common/Types';
import { constants } from 'src/util/StyleConstants';

const styles = {
    button: RX.Styles.createViewStyle({
        backgroundColor: constants.LIGHT_GRAY,
        padding: constants.SMALL_SPACING,
        borderRadius: constants.BORDER_RADIUS,
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: constants.NORMAL_TEXT,
        marginVertical: constants.SMALL_SPACING,
        marginHorizontal: constants.NORMAL_SPACING,
        color: constants.BLACK,
    }),
};

interface SimpleButtonProps {
    onPress: () => void;
    style?: StyleRuleSetRecursive<ViewStyleRuleSet>;
    textStyle?: StyleRuleSetRecursive<TextStyleRuleSet>;
}

export class SimpleButton extends RX.Component<SimpleButtonProps> {
    public render(): ReactElement<HTMLElement> {
        const { style, textStyle } = this.props;

        return (
            <RX.Button
                style={[styles.button, style]}
                onPress={this.props.onPress}
            >
                <RX.Text style={[styles.buttonText, textStyle]}>
                    {this.props.children}
                </RX.Text>
            </RX.Button>
        );
    }
}
