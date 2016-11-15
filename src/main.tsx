/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { HelloComponent } from './Components/Hello'
import { Helper } from './Helper/Helper'
import { RequestType } from './Helper/Enums'
import { IColor } from './Model/Color'
import { IMovie } from './Model/IMovie'
import { ISearch } from './Model/ISearch'
import { Configuration } from './Config/Configuration'

export class MainClass extends React.Component<any, { search?: ISearch, keyword?: string, totalPage?: number, page?: number }>
{
    constructor(props: any) {
        super(props);

        this.state = (this.state = this.props);

        let result: ISearch = { "Search": [{ "Title": "Terminator 2: Judgment Day", "Year": "1991", "imdbID": "tt0103064", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "The Terminator", "Year": "1984", "imdbID": "tt0088247", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX300.jpg" }, { "Title": "Terminator 3: Rise of the Machines", "Year": "2003", "imdbID": "tt0181852", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg" }, { "Title": "Terminator Salvation", "Year": "2009", "imdbID": "tt0438488", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MTM1MzA2NF5BMl5BanBnXkFtZTcwODQ5MTA2Mg@@._V1_SX300.jpg" }, { "Title": "Terminator Genisys", "Year": "2015", "imdbID": "tt1340138", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg" }, { "Title": "Terminator: The Sarah Connor Chronicles", "Year": "2008–2009", "imdbID": "tt0851851", "Type": "series", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyNjA5ODIxM15BMl5BanBnXkFtZTcwMTA1MjU1MQ@@._V1_SX300.jpg" }, { "Title": "Terminator 3: Rise of the Machines", "Year": "2003", "imdbID": "tt0364056", "Type": "game", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg" }, { "Title": "Terminator 2: Judgment Day", "Year": "1991", "imdbID": "tt0244839", "Type": "game", "Poster": "N/A" }, { "Title": "Lady Terminator", "Year": "1989", "imdbID": "tt0095483", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNTk0MzE3N15BMl5BanBnXkFtZTYwNzY3Mjg5._V1_SX300.jpg" }, { "Title": "Ninja Terminator", "Year": "1985", "imdbID": "tt0199849", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5OTc5NzI2OV5BMl5BanBnXkFtZTcwNzk4ODQyMQ@@._V1_SX300.jpg" }], "totalResults": "77", "Response": "True" };


        this.state = { search: result, page: 1 };

    }

    public SearcMovie() {
        console.log(this);
        let self = this;

        let query: any = {
            s: this.state.keyword,
            page: this.state.page,
            apikey: Configuration.ApiKey
        };

        Helper.AjaxRequest(Configuration.UrlList.Search, RequestType.GET, (data: ISearch) => {
            this.setState({ search: data, totalPage: (Number(data.totalResults) / data.Search.length) });
        }, query);
    }


    public ChangeKeyword(e: any) {
        this.setState({ keyword: e.target.value });
    }

    public render() {
        return <div>
            <ReactBootstrap.Grid>
                <ReactBootstrap.Row className="show-grid">
                    <ReactBootstrap.Col md={8}>
                        <ReactBootstrap.Pagination activePage={this.state.page} onSelect={(e: any) => { this.setState({ page: e }); this.SearcMovie() } } bsSize="small" items={this.state.totalPage} />
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={4}>
                        <ReactBootstrap.Button bsStyle="success" bsSize="small" onClick={(e) => { this.SearcMovie() } }>Search</ReactBootstrap.Button>
                        <ReactBootstrap.FormControl onChange={(e) => { this.ChangeKeyword(e) } } />
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>

                <ReactBootstrap.Row className="show-grid">
                    <ReactBootstrap.Col md={12}>
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

                            <HelloComponent key={1} MovieList={this.state.search.Search} />
                        </ReactBootstrap.Table>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>

                <ReactBootstrap.Row className="show-grid">
                    <ReactBootstrap.Col md={16}>
                        <ReactBootstrap.Pagination activePage={this.state.page} onSelect={(e: any) => { this.setState({ page: e }); this.SearcMovie() } } bsSize="small" items={this.state.totalPage} />
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Grid>
        </div>
    }
}


ReactDom.render(<MainClass />, document.getElementById('main'));