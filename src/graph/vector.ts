class vector<T> {
    private value: T;
    private edges: Array<vector<T>>;
    private UnreachableEdges: Array<vector<T>>;

    public constructor(value: T) {
        this.value = value;
        this.edges = [];
    }

    public addDirectionEdge(to: vector<T>): vector<T> {
        this.edges.push(to);
        return this;
    }

    public addUnreachableEdge(to: vector<T>): vector<T> {
        this.UnreachableEdges.push(to);
        return this;
    }

    public getValue(): T {
        return this.value;
    }
}

export default vector;