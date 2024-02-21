import TabButton from '../../../../components/Tabs/partials/TabButton';
import TabPanel from '../../../../components/Tabs/partials/TabPanel';
import { useTabs } from '../../../../components/Tabs/useTabs';
import styles from './LoginPageTabs.module.scss';

const LoginPageTabs = ({ tabsConfig, selectedTabKey }) => {
  const { currentTab, setTab } = useTabs(
    tabsConfig,
    selectedTabKey ?? Object.keys(tabsConfig)[0]
  );

  return currentTab ? (
    <>
      <div className={styles.tabNav}>
        {Object.keys(tabsConfig).map((tabId) => (
          <TabButton
            key={`button-${tabsConfig[tabId].id}`}
            onClick={() => setTab(tabId)}
            active={currentTab === tabId}
            data-testid={`tab_${tabId}`}
            label={tabsConfig[tabId].id}
            className={`${styles.tabLabel} ${
              currentTab === tabId ? styles.open : ''
            }`}>
            {tabsConfig[tabId].label}
          </TabButton>
        ))}
      </div>
      {Object.keys(tabsConfig).map((tabId) => (
        <TabPanel
          key={`panel-${tabsConfig[tabId].id}`}
          label={tabsConfig[tabId].id}
          content={tabsConfig[tabId].panelContent}
          ariaHidden={currentTab !== tabId}
          className={`${styles.tabPanel} ${
            currentTab === tabId ? styles.open : ''
          }`}
        />
      ))}
    </>
  ) : null;
};

export { LoginPageTabs };
