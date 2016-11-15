/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react';
import *  as $ from 'jquery';


export class HelloComponent extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }


    render() { 
        var b = $('#main');
        var a = <div>Hellooo </div>; 
        console.log(b);

        return a;
    }
}


