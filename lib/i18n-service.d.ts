import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
export declare class I18nServiceConfig {
    use: any[];
    config: any;
}
export declare class I18nService {
    private config;
    i18n: any;
    private init;
    whenReady$: Observable<boolean>;
    private whenReadyObserver;
    constructor(config: I18nServiceConfig);
    t(s: string, opts?: any): any;
    tPromise(s: string, opts?: any): any;
}
