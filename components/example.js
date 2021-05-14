
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index'

class ShowListComponent extends Component {
    /*componentWillMount() {
        this.props.fetchData()
    }*/
    updateStore = () => {
        this.props.fetchData();
    }

    getTvShows() {
        const { dataTvMaze } = this.props;
        if (dataTvMaze) {
            return dataTvMaze.data.map((tv, index) => {
                return (
                    <View key={index}>
                        <Text>{tv.show.name}</Text>
                    </View>
                );
            })
        }
    }

    render() {
        return (
            <View>
                <button onClick={this.updateStore}>traer</button>
                <ScrollView>
                    {this.props.dataTvMaze.isFeching && <Text>Loading</Text>}
                    {this.props.dataTvMaze.data.length ? this.getTvShows() : null}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataTvMaze: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            return dispatch(fetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListComponent);