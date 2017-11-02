import inf from './interface';
export default {
    use: function (addOn: any, ...args: Array<any>): any {
        const ow = new addOn(args);
        return ow.install(args);
    }
}