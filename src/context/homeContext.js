import React, { useState, createContext } from "react";

export const OpportunityContext = createContext();
export const NewsContext = createContext();
export const ResourcesContex = createContext();

const HomeContext = ({ children }) => {
  const [opportunity, setOpportunity] = useState({
    id: "",
    location: "",
    position: "",
    type: "",
    date: "",
    content: "",
    company: "",
    toogle: false
  });
  const [news, setNews] = useState({
    id: "",
    title: "",
    date: "",
    location: "",
    content: "",
    img: "",
    toogle: false
  });
  const [resources, setResources] = useState({
    legalAdvice: false,
    programs: false,
    organizations: false
  });

  return (
    <OpportunityContext.Provider value={[opportunity, setOpportunity]}>
      <NewsContext.Provider value={[news, setNews]}>
        <ResourcesContex.Provider value={[resources, setResources]}>
          {children}
        </ResourcesContex.Provider>
      </NewsContext.Provider>
    </OpportunityContext.Provider>
  );
};

export default HomeContext;
