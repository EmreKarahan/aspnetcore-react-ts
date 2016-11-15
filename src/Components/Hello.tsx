/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react';
import *  as $ from 'jquery';
import * as _ from 'lodash';
import { Helper } from '../Helper/Helper'
import { RequestType } from '../Helper/Enums'
import { IMovie } from '../Model/IMovie'

export class HelloComponent extends React.Component<{ MovieList?: IMovie[] }, any>
{
    constructor(props: IMovie[]) {
        super(props);
    }

    public render() {
        return <tbody>
            {
                this.props.MovieList.map(function (item: IMovie, index: number) {
                    return <tr key={item.imdbID}>
                        <td>{index}</td>
                        <td><ReactBootstrap.Image width="171" height="180" src={item.Poster} responsive /></td>
                        <td>{item.Title}</td>
                        <td>{item.Year}</td>
                        <td>{item.Title}</td>
                        <td>{item.Title}</td>
                    </tr>;
                })}
        </tbody>
    }
}


