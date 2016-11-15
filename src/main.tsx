/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { HelloComponent } from './Components/Hello'
import { Helper } from './Helper/Helper'
import { RequestType } from './Helper/Enums'
import { IColor } from './Model/Color'

class MainClass extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        //     Helper.AjaxRequest("color.json", RequestType.GET, (data: Array<IColor>) => {                    

        // });
    }

    public render() {

        let message: string = "Hello React!";
        var output = <div><HelloComponent message={message} /></div>;
        return output;
    }
}



ReactDom.render(<MainClass />, document.getElementById('main'));