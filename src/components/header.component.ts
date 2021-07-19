import {Component} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide();
        }
        const btn = document.querySelector('.js-header-start');
        btn.addEventListener('click', this.buttonHandler.bind(this));
    }

    private buttonHandler() {
        localStorage.setItem('visited', JSON.stringify(true));
        this.hide();
    }
}

