import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { OverviewItem } from './OverviewItem';

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
                    <OverviewItem value={this.props.income} title={this.state.incomeText} />
                    <OverviewItem value={this.props.expense} title={this.state.expenseText} />
                    <OverviewItem value={this.props.balance} title={this.state.balanceText} />
                </View>
                <OverviewItem />
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
        marginTop: '10%',
        width: '100%'
    }

})