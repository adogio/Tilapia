import node from './node';
import tilapia from '../interface';

class binaryTree<T> {

    private root: node<T>;

    public constructor(value: T) {
        this.root = new node(value);
    }

    public getRoot(): node<T> {
        return this.root;
    }

    public addNode(): binaryTree<T> {
        throw new Error("Tilapia need a add module to do this, try npm install tilapia-binary-tree-balance");
    }

    public search(value: T): T {
        throw new Error("Tilapia need a search module to do this, try npm install tilapia-binary-tree-balance");
    }

    public tilapia(uses: Array<tilapia>): binaryTree<T> {
        for (let i: number = 0; i < uses.length; i++) {
            this.use(uses[i]);
        }
        return this;
    }

    public use(use: tilapia): binaryTree<T> {
        this[use.target] = use.func.bind(this);
        return this;
    }
}

export default binaryTree;