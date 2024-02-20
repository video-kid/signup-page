import TabButton from '../../../../components/Tabs/partials/TabButton';
import TabPanel from '../../../../components/Tabs/partials/TabPanel';
import { useTabs } from '../../../../components/Tabs/useTabs';
import styles from './LoginPageTabs.module.scss';

const LoginPageTabs = ({ tabsConfig, selectedTabKey }) => {
  const { currentTab, setTab } = useTabs(
    tabsConfig,
    selectedTabKey ?? Object.keys(tabsConfig)[0]
  );

  return currentTab
    ? Object.keys(tabsConfig).map((tabId, key) => (
        <>
          <TabButton
            key={key}
            onClick={() => setTab(tabId)}
            active={currentTab === tabId}
            data-testid={`tab_${tabId}`}
            label={tabsConfig[tabId].label}
            className={`${styles.tabLabel} ${
              currentTab === tabId ? styles.open : ''
            }`}>
            {tabsConfig[tabId].label}
          </TabButton>
          <TabPanel
            label={tabsConfig[tabId].label}
            content={tabsConfig[tabId].panelContent}
            ariaHidden={currentTab !== tabId}
            className={`${styles.tabPanel} ${
              currentTab === tabId ? styles.open : ''
            }`}
          />
        </>
      ))
    : null;
};

export { LoginPageTabs };
