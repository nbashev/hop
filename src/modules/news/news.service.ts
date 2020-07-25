import {Service} from '../../libs/service';

export class NewsService extends Service {

    getLatest() {
        return this.http.get(this.api.get('news'));
    }

    getByCategory(categoryId: string) {
        return this.http.get(this.api.get('news', categoryId));
    }

}
