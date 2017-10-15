import edge from './edge';

class vector<T> {
    private value: T;
    private edges: Array<edge>;

    public constructor(value: T) {
        this.value = value;
        this.edges = [];
    }
}

export default vector;