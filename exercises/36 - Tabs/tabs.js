const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
    //Hide panels
    tabPanels.forEach(panel =>{
        panel.hidden = true;
    });
    //mark tabs unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });
    //mark tab as selected
    e.currentTarget.setAttribute('aria-selected', true);

    //find associated tab panel and show
    const { id } = e.currentTarget;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));