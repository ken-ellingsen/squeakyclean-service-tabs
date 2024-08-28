import React, { useState } from "react";

const Tabs = ({ services }) => { // {services} destructures 'services' from the prop

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="tabs">
      <div>
        {services.map((service, index) => (
          <h3
            className="tab-title"
            key={index}
          >
            {service.name}
          </h3>
        ))}
      </div>
      <div className="tab-content">
        <p>{services[activeTabIndex].description}</p>
      </div>
    </section>
  );
};

export default Tabs;
