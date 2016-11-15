/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { HelloComponent } from './components/Hello'

class MainClass extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }


    render() {
        var output = <div><HelloComponent/></div>;
        return output;
    }

}

ReactDom.render(<MainClass/>, document.getElementById('main'));