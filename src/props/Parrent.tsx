import { ChildAsFc } from './Child';

const Parent = () => {
  return (
    <ChildAsFc color="red" onClick={() => console.log('Child click')}>
      props_child
    </ChildAsFc>
  );
};

export default Parent;
