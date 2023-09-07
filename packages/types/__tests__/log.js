var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/**********************************************************************
 *
 * @模块名称: log
 *
 * @模块作用: log
 *
 * @创建人: pgli
 *
 * @date: 2023/9/7 1:52 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
var COLOR_TYPE = ['info', 'log', 'warn', 'error', 'success'];
var data_1 = {
    isString: ()=> true,
    isNumber: ()=> false,
    isObject: ()=> true
};
var COLORS = {
    info: '#bfbfbf',
    log: '#1677ff',
    warn: '#fa8c16',
    error: "#f5222d",
    success: '#52c41a',
};
var getColor = function (type) { return COLORS[type]; };
var createLogTypesFactory = function (fn) {
    return COLOR_TYPE.reduce(function (logs, type) {
        logs[type] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn.apply(void 0, __spreadArray([type], args, false));
        };
        return logs;
    }, {});
};
/**
 * 带分段标记的打印
 */
var consoleTag = createLogTypesFactory(function (type, ns, msg) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    var color = getColor(type);
    var hasTwoTags = (0, data_1.isString)(msg) || (0, data_1.isNumber)(msg);
    var logArgs = ["%c ".concat(ns, " ").concat(hasTwoTags ? '%c ' + msg : '', " %c ").concat(args.length ? '%o' : '')];
    if (hasTwoTags) {
        logArgs.push("background:".concat(color, ";border:1px solid ").concat(color, "; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;"));
        logArgs.push("border:1px solid ".concat(color, "; padding: 1px; border-radius: 0 4px 4px 0; color: ").concat(color, ";"));
        logArgs.push('background:transparent');
    }
    else {
        logArgs.push("background:".concat(color, ";border:1px solid ").concat(color, "; padding: 1px; border-radius: 4px; color: #fff;"));
        logArgs.push('background:transparent');
        logArgs.push(msg);
    }
    console.log.apply(console, __spreadArray(__spreadArray([], logArgs, false), args, false));
});
/**
 * 修改字符串颜色
 */
var consoleStr = createLogTypesFactory(function (type, msg) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var color = getColor(type);
    console.log.apply(console, __spreadArray(["%c ".concat(msg, " ").concat(args.length ? '%o' : ''), "color: ".concat(color, ";")], args, false));
});
/**
 * 修改打印背景
 */
var consoleBg = createLogTypesFactory(function (type, msg) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var color = getColor(type);
    console.log.apply(console, __spreadArray(["%c ".concat(msg, " ").concat(args.length ? '%o' : ''), "background:".concat(color, "; padding: 2px; border-radius: 4px; color: #fff;")], args, false));
});
/**
 * 对外报漏修改入口
 * @param obj
 * @param myColors
 */
var createConsoleFactory = function (obj, myColors) {
    Object.assign(COLORS, myColors);
    if ((0, data_1.isObject)(obj)) {
        obj.bg = consoleBg;
        obj.str = consoleStr;
        obj.tag = consoleTag;
    }
};

