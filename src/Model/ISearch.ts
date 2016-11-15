import { IMovie } from '../Model/IMovie'

interface ISearch {
    Response?: string;
    Search?: IMovie[];
    totalResults?: string;
}

export { ISearch }