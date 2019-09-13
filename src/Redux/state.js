let state = {
    contacts: [
        {
            id: 1,
            name: "John Golt",
            phone: "12345678"
        },
        {
            id: 2,
            name: "Juliet Kapuletti",
            phone: "87654321"
        },
        {
            id: 3,
            name: "Skarlet O'Hara",
            phone: "81726354"
        },
        {
            id: 4,
            name: "Harry Potter",
            phone: "09656754"
        },
        {
            id: 5,
            name: "Jane Air",
            phone: "07770888"
        }
    ]
}

export let AddContact = (name, phone) => {
    let newContact = {
        id: 6,
        name: name,
        phone: phone
    };

    state.contacts.push(newContact);
}

export default state;