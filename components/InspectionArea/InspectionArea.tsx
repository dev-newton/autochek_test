import { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import styles from "./InspectionArea.module.css";

const InspectionArea = ({ car }) => {
  const [active, setActive] = useState(0);

  const inspection_data = car.damageMedia;
  const inspection_names = inspection_data.map((ins_data) => ins_data.name);
  const inspection_items = inspection_data.map(
    (ins_data) => ins_data.inspectionItems
  );

  const inspectData = inspection_items.find((i_item, i) => i === active);

  return (
    <Tabs
      style={{
        display: "flex",
        backgroundColor: "#fbfbfb",
      }}
    >
      <TabList style={{ display: "flex", flexDirection: "column" }}>
        {inspection_names.map((name, i) => (
          <Tab
            key={i}
            onClick={() => {
              setActive(i);
            }}
            className={[styles.tab, active === i && styles.tab_active]}
          >
            {name}
          </Tab>
        ))}
      </TabList>

      <div className={styles.inspect_container}>
        {inspectData.map((item, i) => (
          <div key={i} className={styles.inspect_wrapper}>
            <p>{item.name}</p>
            {item.response === "good" ? (
              <IoMdCheckmarkCircleOutline fontSize="20" color="#4caf4f" />
            ) : (
              <AiOutlineWarning fontSize="20" color="#e21511" />
            )}
          </div>
        ))}
      </div>
    </Tabs>
  );
};

export default InspectionArea;
