
class node<T>{

    private value: T;
    private leftChild: node<T>;
    private rightChild: node<T>;

    public constructor(value: T) {
        this.value = value;
    }

}

export default node;