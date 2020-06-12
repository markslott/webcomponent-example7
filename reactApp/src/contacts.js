import fetchDataHelper from './fetchDataHelper.js';
import React from 'react';
import './contacts.css';

//This is the module that defines the behavior of our web component
class Contacts extends React.Component {

    //in the constuctor we initilize state, add our event listeners, and create the
    //shadow DOM. Props contains properties (like the title) in the constructor.
    constructor(props) {
        super(props);
        this.state = {
            contacts : []
        }
    }

    //in componentDidMount we retrieve data end render it. Kind of like connectedCallback
    componentDidMount() {
       this.getData();
    }

    //called when the refresh button is clicked
    refresh() {
        this.getData();
    }

    rowSelected(event) {
      console.log("event",event);
      console.log("event.target",event.target);
      this.props.callbackParent(event.target);
    }

    async getData() {
        const data = await fetchDataHelper({ amountOfRecords: 10 });
        this.setState({contacts : data});
        console.log(data);
    }

    //this function renders the component when the state changes. It uses JSX which
    //merges HTML into Javascript as a 1st class citizen.
    render() {
        const rows = [];
        this.state.contacts.forEach((item, index) =>  {
            rows.push(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
                    <td>{item.amount}</td>
                    <td>{item.phone}</td>
                </tr>
               )
            })

        return (
            <div>
                <span class="title">{this.props.title}</span>
                <button name="Refresh" class="refreshbutton" onClick={() => this.getData()}>Refresh</button>
                <table class="datatable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Amount</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody onClick={event => this.rowSelected(event)}>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Contacts;
