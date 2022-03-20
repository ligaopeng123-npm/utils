/**********************************************************************
 *
 * @模块名称: mockData
 *
 * @模块用途: mockData
 *
 * @date: 2021/10/21 14:42
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export const treeData = [{
    id: 1,
    children: [{
        id: 11,
        children: [{
            id: 7,
        }]
    }, {
        id: 11
    }, {
        id: 7
    }]
}, {
    id: 2,
    children: [{
        id: 11,
    }, {
        id: 11
    }, {
        id: 6
    }]
}, {
    id: 3,
}, {
    id: 4,
}, {
    id: 5,
    children: [{
        id: 6,
        children: [{
            id: 7,
        }, {
            id: 8,
        }]
    }]
}];


export const treeData1 = [{
    id: 1,
    children: [{
        id: 11,
        children: [{
            id: 7,
        }]
    }, {
        id: 11
    }, {
        id: 7
    }]
}];

export const treeData2 = [{
	id: 1,
	__path: '0',
	name: '1',
	children: [{
		id: 11,
		__path: '0-0',
		children: [{
			__path: '0-0-0',
			id: 7,
		}]
	}, {
		__path: '0-1',
		id: 11
	}, {
		__path: '0-2',
		id: 7
	}]
}];

export const listData = [{ id: 2, pid: 1 }, {id: 10, pid: 3},{ id: 3, pid: 2 }, { id: 4, pid: 6 },{ id: 5, pid: 4 },  {id: 7, pid: 9}];

export const listTreeData: any = [
    {
        "id": 2,
        "pid": 1,
        "children": [
            {
                "id": 3,
                "pid": 2,
                "children": [
                    {
                        "id": 10,
                        "pid": 3,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "pid": 6,
        "children": [
            {
                "id": 5,
                "pid": 4,
                "children": []
            }
        ]
    },
    {
        "id": 7,
        "pid": 9,
        "children": []
    }
]