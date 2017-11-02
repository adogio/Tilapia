import inf from '../interface';

class sort implements inf {
    target = "Array";
    install(varName?: string) {
        Array.prototype[varName || "centerSort"] = this.func;
    }

    func() {

    }
}