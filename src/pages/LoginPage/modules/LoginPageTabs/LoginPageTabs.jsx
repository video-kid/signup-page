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
    <div className={styles.tabsWrapper}>
      {Object.keys(tabsConfig).map((tabId, key) => (
        <div
          className={`${styles.tab} ${currentTab === tabId ? styles.open : ''}`}
          ariaHidden={currentTab !== tabId}>
          <TabButton
            key={key}
            onClick={() => setTab(tabId)}
            active={currentTab === tabId}
            data-testid={`tab_${tabId}`}
            label={tabsConfig[tabId].label}
            className={styles.tabLabel}>
            {tabsConfig[tabId].label}
          </TabButton>
          <TabPanel
            label={tabsConfig[tabId].label}
            content={tabsConfig[tabId].panelContent}
            className={styles.tabPanel}
          />
        </div>
      ))}
    </div>
  ) : null;
};

export { LoginPageTabs };
