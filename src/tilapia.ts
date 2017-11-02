import inf from './interface';
export default {
    use: function (addOn: inf, ...args: Array<any>): any {
        return addOn.install(args);
    }
}