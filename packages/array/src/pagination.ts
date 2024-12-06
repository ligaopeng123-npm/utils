/**********************************************************************
 *
 * @模块名称: pagination
 *
 * @模块作用: pagination
 *
 * @创建人: pgli
 *
 * @date: 2024/11/22 12:28 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export type PaginationProps = {
    total: number;
    pageNum?: number;
    pageSize?: number;
    onMax?: (current: number) => void;
    onMin?: (current: number) => void;
}

class Pagination {
    current: number = 1;
    total: number = 0;
    pageNum: number = 1;
    pageSize: number = 10;
    onMax: (current: number) => void;
    onMin: (current: number) => void;

    constructor(props: PaginationProps) {
        this.init(props);
    }

    init(props: PaginationProps) {
        this.total = props.total || this.total;
        this.pageNum = props.pageNum || this.pageNum;
        this.pageSize = props.pageSize || this.pageSize;
        this.onMax = props.onMax || this.onMax;
        this.onMin = props.onMin || this.onMin;
    }

    next = () => {
        // 条数足够 进入下一条
        if (this.current * this.pageSize < this.total) {
            this.current++;
        } else {
            this.onMax && typeof this.onMin === 'function' && this.onMax(this.current);
        }
    }

    previous = () => {
        if (this.current > 1) {
            this.current--;
        } else {
            this.onMin && typeof this.onMin === 'function' && this.onMin(this.current);
        }
    }
}

export default Pagination;
