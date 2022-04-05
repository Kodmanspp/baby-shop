import { useState } from 'react';
import { Collapse } from 'antd';

const Accordion = (props) => {
  const { Panel } = Collapse;
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const [active, setActive] = useState(false);

  return (
    // <div className={`accordion ${active ? 'active' : ''}`}>
    //   <div className='accordion__title' onClick={() => setActive(!active)}>
    //     <span>{props.title}</span>
    //   </div>
    //   <div className='accordion__content'>{props.content}</div>
    // </div>
    <Collapse accordion>
      <Panel header='This is panel header 1' key='1'>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 2' key='2'>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 3' key='3'>
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default Accordion;
