/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { HelloComponent } from './Components/Hello'
import { Helper } from './Helper/Helper'
import { RequestType } from './Helper/Enums'
import { IColor } from './Model/Color'
import * as Model from './Model/Movie'
import { Configuration } from './Config/Configuration'

class MainClass extends React.Component<any, { MovieList?: Array<Model.IMovie> }>
{
    constructor(props: any) {
        super(props);
        this.state = { MovieList: [] };

    }


    public SearcMovie() {
        Helper.AjaxRequest(Configuration.UrlList.Search, RequestType.GET, (data?: Array<Model.IMovie>) => {
            this.setState({ MovieList: data });
            console.log(this.state.MovieList);
        }, {
                s: 'terminator',
                apikey: Configuration.ApiKey
            });
    }

    public render() {
        var output = <div><ReactBootstrap.Button onClick={(e) => { this.SearcMovie() } } /> <HelloComponent MovieList={this.state.MovieList} /></div>;
        return output;
    }
}


ReactDom.render(<MainClass />, document.getElementById('main'));