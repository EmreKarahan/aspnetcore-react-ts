/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react';
import *  as $ from 'jquery';
import * as _ from 'lodash';



export class HelloComponent extends React.Component<{ message?: string }, any>
{
    constructor(props: any) {
        super(props);
        console.log(props.message);
    }

    public render() {
        return <div>
            <ReactBootstrap.ButtonToolbar>
                <ReactBootstrap.Button bsStyle="primary" bsSize="large">Large button</ReactBootstrap.Button>
                <ReactBootstrap.Button bsSize="large">Large button</ReactBootstrap.Button>
            </ReactBootstrap.ButtonToolbar>
            <h2>{this.props.message}</h2>
        </div>;
    }
}


