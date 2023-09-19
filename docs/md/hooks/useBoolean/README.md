# # useBoolean

> TODO:  bool类型定义，使用场景：窗口的打开关闭；loading状态的控制等；
>
> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-useboolean--demo)

## 参数

`接收默认值true或者false，默认为false`

`返回值为bool和一个actions`

```tsx
type ActionsFn = () => void;
type ActionsSetFn = (val: boolean) => void;
export type Actions = {
    setTrue: ActionsFn, // 设置true
    setFalse: ActionsFn, // 设置false
    setAuto: ActionsFn, // 如果当前为true 设置为false 如果为false则为true
    setBool: ActionsSetFn // 根据传递的值设置
};
```

## Usage

```
const TestUseBoolean: React.FC<TestUseBooleanProps> = (props) => {
    const [bool, {setTrue, setFalse, setBool, setAuto}] = useBoolean(false);
    return (
        <React.Fragment>
            <h3>useBoolean</h3>
            <button onClick={() => setTrue()}>true</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setFalse()}>false</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setBool(true)}>setBool</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setAuto()}>setAuto</button><br/>
            bool: <span>{`${bool}`}</span>
        </React.Fragment>
    )
};

export default TestUseBoolean;
```
