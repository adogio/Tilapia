interface tilapia {
    target: string,
    func: Function
}

class hashMap<T> {

    private size: number;
    private obj: object;

    public constructor() {
        this.size = 0;
        this.obj = new Object();
    }

    public tilapia(uses: Array<tilapia>): hashMap<T> {
        for (let i = 0; i < uses.length; i++) {
            this.use(uses[i]);
        }
        return this;
    }

    public use(use: tilapia): hashMap<T> {
        this[use.target] = use.func.bind(this);
        return this;
    }

    public put(key: string, value: T): hashMap<T> {
        if (!this.containsKey(key)) this.size++;
        this.obj[key] = value;
        return this;
    }

    public get(key: string): T {
        return this.containsKey(key) ? this.obj[key] : void 0;
    }

    public remove(key: string): T {
        let temp: T = null;
        if (this.containsKey(key)) {
            temp = this.obj[key];
            this.obj[key] = void 0;
            this.size--;
        }
        return temp;
    }

    public values(): Array<T> {
        let _re = new Array<T>();
        for (let key in this.obj) _re.push(this.obj[key]);
        return _re;
    }

    public keys(): Array<string> {
        let _re = new Array<string>();
        for (let key in this.obj) _re.push(key);
        return _re;
    }

    public getSize(): number {
        return this.size;
    }

    public clear(): void {
        this.obj = new Object();
        this.size = 0;
    }

    private containsKey(key: string): boolean {
        return key in this.obj;
    }

    private containsValue(value: T): boolean {
        for (let key in this.obj) if (this.obj[key] === value) return true;
        return false;
    }
}

export default hashMap;