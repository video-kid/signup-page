import { useState } from 'react';

export const useTabs = (tabsConfig, selectedTabKey) => {
  const [selectedTab, changeTab] = useState(selectedTabKey);
  const setTab = (label) => changeTab(label);

  let currentTab;

  if (Object.keys(tabsConfig).length && tabsConfig[selectedTab]) {
    currentTab = selectedTab;
  } else {
    currentTab = Object.keys(tabsConfig).length && Object.keys(tabsConfig)[0];
  }

  return {
    setTab,
    currentTab,
  };
};
