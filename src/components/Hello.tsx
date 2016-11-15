/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react';
import *  as $ from 'jquery';
import * as _ from 'lodash';
import { Helper } from '../Helper/Helper'
import { RequestType } from '../Helper/Enums'
import * as Model from '../Model/Movie'

export class HelloComponent extends React.Component<{ message?: string, MovieList?: Array<Model.IMovie> }, {}>
{
    constructor(props: any) {
        super(props);

    }

    private RenderItem(item: Model.IMovie) {

        return <div>
            {item.Title}
        </div>;
    }


    public render() {
        return <div>
            
        </div>;
    }
}


