import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Contact from 'components/contact/contact';

let CONTACTS =[
    {
        id: 1,
        name: 'Vasya Pupkin',
        image: 'http://www.placecage.com/gif/80/80',
    },
    {
        id: 2,
        name: 'Petya Cagevich',
        image: 'http://www.placecage.com/gif/75/75',
    },
    {
        id: 3,
        name: 'Ivan Ivanuch',
        image: 'http://www.placecage.com/gif/79/79',
    }
];

class ContactList extends Component {
    render() {
        return (
            <ul className="class-list">
                <input type="text" />
                {
                    CONTACTS.map(function(el) {
                        return (
                          <Contact
                              key={el.id}
                              name={el.name}
                              image={el.image}
                          />
                        )

                    })
                }
            </ul>
        )
    }
}

export default ContactList;
