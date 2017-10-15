import vector from './vector';
import tilapia from '../interface';

class graph<T> {

    private vectors: Array<vector<T>>;

    public constructor(list: any, ...vectors: Array<T>) {
        if (list.length) {
            for (let i: number = 0; i < list.length; i++) {
                this.addVector(list[i]);
            }
            if (vectors) {
                throw new Error("The graph have to contructed like (Array<T>) or (T,T,T,T...)")
            }
        } else {
            this.addVector(list);
            for (let i: number = 0; i < vectors.length; i++) {
                this.addVector(vectors[i]);
            }
        }
    }

    public tilapia(uses: Array<tilapia>): graph<T> {
        for (let i: number = 0; i < uses.length; i++) {
            this.use(uses[i]);
        }
        return this;
    }

    public use(use: tilapia): graph<T> {
        this[use.target] = use.func.bind(this);
        return this;
    }

    public addVector(value: T): graph<T> {
        let node: vector<T> = new vector<T>(value);
        this.vectors.push(node);
        return this;
    }

    public addDirectionEdge(from: T, to: T): graph<T> {
        let vfrom: vector<T> = this.getVector(from);
        let vto: vector<T> = this.getVector(to);
        if (vfrom && vto) {
            vfrom.addDirectionEdge(vto);
            vto.addUnreachableEdge(vfrom);
        }
        return this;
    }

    public addUndirectionEdge(from: T, to: T): graph<T> {
        let vfrom: vector<T> = this.getVector(from);
        let vto: vector<T> = this.getVector(to);
        if (vfrom && vto) {
            vfrom.addDirectionEdge(vto);
            vto.addDirectionEdge(vfrom);
        }
        return this;
    }

    private getVector(name: T): vector<T> {
        for (let i: number = 0; i < this.vectors.length; i++) {
            if (name == this.vectors[i].getValue()) return this.vectors[i];
        }
        return null;
    }
}

export default graph;