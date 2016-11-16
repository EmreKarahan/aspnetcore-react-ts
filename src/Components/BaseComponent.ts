
/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react';

export class BaseComponent<P, S> extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
    }


}