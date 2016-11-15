/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react';
import *  as $ from 'jquery';
import * as _ from 'lodash';


export class HelloComponent extends React.Component<{message?:string}, any>
{
    constructor(props: any) {
        super(props);
        console.log(props.message);        
    }

    public render() {
        return <div>{this.props.message}</div>;
    }
}


