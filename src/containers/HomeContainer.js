import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

import { downCounter, upCounter } from '../actions/CounterActions';
import { login } from '../actions/UserActions';

class HomeContainer extends React.Component {

    state = {
        username: '',
    };

    onUsernameChange = username => this.setState({ username });

    onIncrementPress = () => this.props.upCounter();

    onDecrementPress = () => this.props.downCounter();

    onLoginPress = () => this.props.login({ username: this.state.username });

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>Learn to use Redux-Persist!!!</Text>
                </View>

                <View style={styles.form}>

                    <View style={{ marginBottom: 10 }}>
                        <Text>Logged ?: {this.props.user ? this.props.user.isLogged.toString() : ''}</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text>Username ?: {this.props.user && this.props.user.info ? this.props.user.info.username : ''}</Text>
                    </View>

                    <View style={{marginBottom: 20}}>
                        <TextInput
                            style={{
                                width: width - 40, height: 50, backgroundColor: "#FFFFFF",
                                marginLeft: 10, marginRight: 10, paddingLeft: 10,
                            }}
                            value={this.state.username}
                            placeholder={'Username'}
                            onChangeText={this.onUsernameChange}
                            autoCapitalize={'none'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>

                    <TouchableOpacity onPress={this.onLoginPress} style={[styles.buttonWrapper]}>
                        <Text style={styles.buttonLabel}>{"Login"}</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.counterWrapper}>
                    <TouchableOpacity
                        style={[styles.buttonWrapper, { width: width / 8, flex: 1 }]}
                        onPress={this.onIncrementPress}

                    >
                        <Text style={[styles.buttonLabel, { fontSize: 30 }]}>{"+"}</Text>
                    </TouchableOpacity>

                    <View style={styles.counterValueWrapper}>
                        <Text style={styles.countText}>{this.props.counter}</Text>
                    </View>


                    <TouchableOpacity
                        style={[styles.buttonWrapper, { width: width / 8, flex: 1 }]}
                        onPress={this.onDecrementPress}
                    >
                        <Text style={[styles.buttonLabel, {fontSize: 30}]}>{"-"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 2}}></View>
            </View>
        );
    }
}


export default connect(
    state => ({
        user: state.userState,
        counter: state.counterState,
    }),
    { downCounter, upCounter, login },
)(HomeContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f5fe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#fff59d",
        borderRadius: 20
    },
    counterWrapper: {
        // marginTop: 50,
        // justifyContent: 'space-around',
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "#fff59d",
        borderRadius: 20
    },
    titleWrapper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        // position: 'absolute',
        // top: 50,
        // alignSelf: 'center',
        fontWeight: 'bold',
        // fontSize: 20,
        // textAlign: 'center',
    },
    countText: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonWrapper: {
        backgroundColor: "#607d8b",
        width: width / 3,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    buttonLabel: {
        color: "#FFFFFF"
    },
    counterValueWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

