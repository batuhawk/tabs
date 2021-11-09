let tabHederItems = ['#circle', '#triangle', '#square', '#pentagon'];
let tabContentItems = [
  {
    header: 'circle',
    content: '- Has zero edge'
  },
  {
    header: 'triangle',
    content: '- Has three edge'
  },
  {
    header: 'square',
    content: '- Has four edge'
  },
  {
    header: 'pentagon',
    content: '- Has five edge'
  }
];

let tabs = document.querySelector('.tabs');

let tabHeader = document.createElement('ul');
tabHeader.classList.add('tab-header');

let tabContent = document.createElement('div');
tabContent.classList.add('tab-content');

tabs.append(tabHeader, tabContent);
document.body.append(tabs);

/*Tab header fill in*/
tabHederItems.forEach((tabHederItem) => {
  let tabHeaderList = document.createElement('li');

  tabHeaderList.setAttribute('data-tab-event', tabHederItem);
  tabHeaderList.innerText = tabHederItem.substring(1).toUpperCase();

  tabHeader.appendChild(tabHeaderList);
});

/*Tab content fill in*/
tabContentItems.forEach((tabContentItem)=> {
  let tabContentList = document.createElement('div');

  tabContentList.setAttribute('id', tabContentItem.header);
  tabContentList.setAttribute('data-tab-target', '');

  let tabContentHeader = document.createElement('h3');
  let tabContentParagraph = document.createElement('p');

  tabContentHeader.innerText = tabContentItem.header.toUpperCase();
  tabContentParagraph.innerText = tabContentItem.content;

  tabContentList.append(tabContentHeader, tabContentParagraph);
  tabContent.appendChild(tabContentList);
});

/*Set default header active attribute*/
let defaultActiveContent = document.querySelector('#circle');
defaultActiveContent.setAttribute('class', 'active');

/*Set default content active attribute*/
let defaultActiveHeader = document.querySelector('li[data-tab-event="#circle"]');
defaultActiveHeader.setAttribute('class', 'active');

/*Select all header items and content items*/
let tabEvents = document.querySelectorAll('[data-tab-event]');
let tabTargets = document.querySelectorAll('[data-tab-target]');

/*Click event*/
tabEvents.forEach(tabEvent => {
  tabEvent.addEventListener('click', () => {
    const targets = document.querySelector(tabEvent.dataset.tabEvent);
    
    /*Active classes removing in inactive ones*/
    tabTargets.forEach(tabTarget => {
      tabTarget.classList.remove('active');
    });

    tabEvents.forEach(tabEvent => {
      tabEvent.classList.remove('active');
    });
    
    /*Active class adding*/
    tabEvent.classList.add('active');
    targets.classList.add('active');
  });
});