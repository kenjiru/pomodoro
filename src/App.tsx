import * as RX from 'reactxp';

const styles = {
    main: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }),

    title: RX.Styles.createTextStyle({
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
    }),

    label: RX.Styles.createTextStyle({
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
    }),

    name: RX.Styles.createTextStyle({
        color: '#42B74F',
    }),

    links: RX.Styles.createViewStyle({
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    }),

    link: RX.Styles.createLinkStyle({
        paddingRight: 5,
        paddingLeft: 5,
        color: '#0070E0',
    }),
};

export class App extends RX.Component {
    public render() {
        return (
            <RX.View style={styles.main}>
                <RX.View>
                    <RX.Text style={styles.title}>Welcome to <RX.Text style={styles.name}>ReactXP</RX.Text></RX.Text>
                    <RX.Text style={styles.label}>To get started, edit /src/App.tsx</RX.Text>
                </RX.View>

                <RX.View style={styles.links}>
                    <RX.Link url={'https://github.com/Microsoft/reactxp'} style={styles.link}>GitHub</RX.Link>
                    <RX.Link url={'https://microsoft.github.io/reactxp'} style={styles.link}>Docs</RX.Link>
                </RX.View>
            </RX.View>
        );
    }
}
