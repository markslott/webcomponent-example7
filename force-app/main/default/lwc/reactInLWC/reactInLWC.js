import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import App from '@salesforce/resourceUrl/app';

export default class ReactInLWC extends LightningElement {

    connectedCallback() {
        Promise.all([
            loadScript(this, App),
        ]).then(() => {
            console.log("scripts loaded");
            // eslint-disable-next-line no-undef
            runme(this.template.querySelector('div'));
        }).catch( error => {console.log(error)});
    }

}