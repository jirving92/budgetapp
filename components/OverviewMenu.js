import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class OverviewMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseText: "Expense",
            incomeText: 'Income',
            balanceText: "Balance",
            overviewText: 'Overview'
        };
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.overviewTextContainer}>
                    <Text style={styles.overviewStyle}>{this.state.overviewText}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        {this.state.expenseText}
                    </Text>
                    <Text style={styles.textStyle}>
                        {this.state.incomeText}
                    </Text>
                    <Text style={styles.textStyle}>
                        {this.state.balanceText}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
        // alignItems: 'center'
    },
    textStyle: {
        display: 'flex'
    },
    overviewTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    overviewStyle: {
        display: 'flex'
    },
    mainContainer: {
        width: '100%'
    }

})