import { Component, ReactElement } from 'react';
import * as RX from 'reactxp';
import { StyleRuleSetRecursive, ViewStyleRuleSet } from 'reactxp/src/common/Types';
import { constants } from 'src/util/StyleConstants';

const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: constants.MEDIUM_SPACING,
    }),
};

interface PanelProps {
    style?: StyleRuleSetRecursive<ViewStyleRuleSet>;
    title?: string;
}

export class Panel extends Component<PanelProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <RX.View style={this.getStyle()}>
                {this.props.children}
            </RX.View>
        );
    }

    private getStyle(): Array<StyleRuleSetRecursive<ViewStyleRuleSet>> {
        return [styles.container, this.props.style];
    }
}
