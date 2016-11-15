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

            <ReactBootstrap.Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </ReactBootstrap.Table>
            <h2>{this.props.message}</h2>
        </div>;
    }
}


