export class Configuration {


    public static BaseApiUrl: string = 'http://www.omdbapi.com/';
    public static ApiUrlSuffix: string = '&y=&plot=full&r=json';    
    public static ApiKey = 'bdaada75';

    static UrlList: any = {
        Search: Configuration.BaseApiUrl
    }
}