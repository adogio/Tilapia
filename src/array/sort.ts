import inf from '../interface';

class sort implements inf {
    public target: string = "Array";

    public constructor() {

    }

    public install(varName?: string): string {
        Array.prototype[varName || "centerSort"] = this.func;
        return varName;
    }

    public func(): Array<any> {
        const pre: any = this;
        if (pre.length <= 2) {
            return pre[0] < pre[1] ? [pre[0], pre[1]] : [pre[1], pre[0]];
        }
        let response: Array<any> = pre[0] < pre[1] ? [pre[0], pre[1]] : [pre[1], pre[0]];

        for (let i: number = 2; i < pre.length; i++) {
            insert(pre[i]);
        }

        function insert(element: any): void {
            if (element <= response[0]) {
                response.unshift(element);
                return;
            }
            if (element >= response[response.length - 1]) {
                response.push(element);
                return;
            }
            // response.splice(devideSearch(element, 0, response.length), 0, element);
            response.splice(loopSearch(element), 0, element);
        }

        function devideSearch(element: any, min: number, max: number): number {
            if (max - min <= 1) {
                // console.log(element, pre[min], pre[max], min, max)
                return element > pre[min] ? max : min
            }
            if (pre[Math.floor(min + ((min + max) / 2))] < element) {
                return devideSearch(element, min, Math.floor(min + ((min + max) / 2)));
            } else if (pre[Math.floor(min + ((min + max) / 2))] > element) {
                return devideSearch(element, Math.floor(min + ((min + max) / 2)), max);
            } else {
                return devideSearch(element, Math.floor(min + ((min + max) / 2)) - 1, Math.floor(min + ((min + max) / 2)));
            }
        }

        function loopSearch(element: any): number {
            for (let i = 1; i < response.length; i++) {
                if (response[i] > element) return i;
            }
            return response.length - 1;
        }
        return response;
    }
}

export default sort;