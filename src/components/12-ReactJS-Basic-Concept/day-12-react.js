import React, { Component } from 'react';
import State from './state';
import Properties from './properties';

class Day12React extends Component {
    render() {
        return (
            <div>
                <State/>
                <Properties hello={"Quang"}/>
            </div>
        );
    }
}

export default Day12React;