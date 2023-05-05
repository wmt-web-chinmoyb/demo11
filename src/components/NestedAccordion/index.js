import React from "react";
import "./NestedAccordion.scss";
import { Card, Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const NestedAccordion = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Card title="Nested Panel" data-testId="nested-pannel">
        <Collapse onChange={onChange}>
          <Panel header="This is panel header 1" key="1">
            <Collapse defaultActiveKey="1">
              <Panel header="This is panel nest panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};

export default NestedAccordion;
