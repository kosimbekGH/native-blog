import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
    }

    tabs = [];

    init() {
        this.$el.addEventListener('click', this.tabClickHandler.bind(this))
    }

    public registerTabs(tabs) {
        this.tabs = tabs;
    }

    private tabClickHandler(event) {
        event.preventDefault();
        if (event.target.classList.contains('tab')) {
            // @ts-ignore
            Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
                tab.classList.remove('active');
            })
            event.target.classList.add('active');
            // @ts-ignore
            const activeTab = this.tabs.find(t => t.name === event.target.dataset);
           this.tabs.forEach(t => {
               t.component.hide();
           })
            activeTab.component.show();
        }
    }
}
