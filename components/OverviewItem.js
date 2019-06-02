import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class OverviewItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    {this.props.title}
                </Text>
                <Text>
                    {this.props.value}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    textStyle: {
        display: 'flex'
    }

})