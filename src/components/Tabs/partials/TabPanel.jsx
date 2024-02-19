const TabPanel = ({ content, label, ...props }) => {
  return (
    <div
      id={label}
      role='tabpanel'
      tabIndex={0}
      aria-labelledby={label}
      {...props}>
      {content}
    </div>
  );
};

export default TabPanel;
