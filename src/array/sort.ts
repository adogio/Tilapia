import inf from '../interface';

class sort implements inf {
    public target = "Array";

    public constructor() {

    }

    public install(varName?: string): string {
        Array.prototype[varName || "centerSort"] = this.func;
        return varName;
    }

    public func() {
        console.log("t");
    }
}

export default sort;