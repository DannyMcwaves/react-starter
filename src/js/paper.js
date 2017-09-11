// importing css dependencies

let mapFunction = data => data.map(i => i + "s.");

if (module.hot) {
    module.hot.accept();
}


export default class Paper {
    constructor(data) {
        this.data = data;
    }
    get transform(){
        return mapFunction(this.data);
    }
}