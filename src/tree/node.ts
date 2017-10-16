
class node<T>{

    private value: T;
    private _leftChild: node<T>;
    private _rightChild: node<T>;

    public constructor(value: T) {
        this.value = value;
    }

    public set left(value: T) {
        this._leftChild = new node<T>(value);
    }

    public get left(): T {
        return this._leftChild.getValue();
    }

    public set right(value: T) {
        this._rightChild = new node<T>(value);
    }

    public get right(): T {
        return this._rightChild.getValue();
    }

    public leftChild(): node<T> {
        return this._leftChild;
    }

    public rightChild(): node<T> {
        return this._rightChild;
    }

    public isLeft(): boolean {
        return Boolean(this._leftChild);
    }

    public isRight(): boolean {
        return Boolean(this._rightChild);
    }

    public getValue(): T {
        return this.value;
    }

    public

}

export default node;