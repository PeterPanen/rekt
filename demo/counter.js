import { dom } from '../index';

const Box = props => {
  console.log("Box rendered.") // TODO: Implement key identifier in reconciler for lists of nodes
  return (
    <div onClick={() => console.log(props.counter)} style="width: 40px; height: 40px; background-color: green; display: inline-block; margin: 4px;"></div>
  );
}

export default props => (
  <div>
    <div>Counter: {props.counter}</div>
    <button onClick={() => props.onSubtract()}>Subtract</button>
    <button onClick={() => props.onAdd()}>Add</button>
    <br/>
    {Array(props.counter).fill().map(() => (
      <Box counter={props.counter} />
    ))}
  </div>
);
