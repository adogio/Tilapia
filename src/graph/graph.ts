import vector from './vector';
import tilapia from '../interface';

class graph<T> {

    private vectors: Array<vector<T>>;

    public constructor(list: any, ...vectors: Array<T>) {
        if (list.length) {
            for (let i = 0; i < list.length; i++) {
                this.addVector(list[i]);
            }
            if (vectors) {
                throw new Error("The graph have to contructed like (Array<T>) or (T,T,T,T...)")
            }
        } else {
            this.addVector(list);
            for (let i = 0; i < vectors.length; i++) {
                this.addVector(vectors[i]);
            }
        }
    }

    public tilapia(uses: Array<tilapia>): graph<T> {
        for (let i = 0; i < uses.length; i++) {
            this.use(uses[i]);
        }
        return this;
    }

    public use(use: tilapia): graph<T> {
        this[use.target] = use.func.bind(this);
        return this;
    }

    public addVector(value: T) {
        let node = new vector<T>(value);
        this.vectors.push(node);
    }

    public addEdge()
}

export default graph;