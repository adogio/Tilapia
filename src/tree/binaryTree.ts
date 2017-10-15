import node from './node';

class binaryTree<T> {

    private root: node<T>;

    public constructor(value: T) {
        this.root = new node(value);
    }
}

export default binaryTree;