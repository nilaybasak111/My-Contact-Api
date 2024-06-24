const asyncHandler = require ("express-async-handler");
const Contact = require ("../models/contactsModel.js");

// @desc Get all Contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler ( async (req,res) => {
    const contacts = await Contact.find();
    //res.send("");
    res.status(200).json({ message : "Got all Contacts", contacts})
})

// @desc Get Contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler ( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({ message : "No Contact Found"})
    }
    res.status(200).json({message : `Get Contact for ${req.params.id} :`,contact});
});

// @desc Create New Contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler ( async (req,res) => {
    const {name, age, email, phNo} = req.body;
    if(!name || !age || !email || !phNo) {
        res.status(400).json({
            message: "Fill the all Inputs, All inputs are Mandatory"
        })
    }
    const contact = await Contact.create({
        name,
        age,
        email,
        phNo
    })
    res.status(201).json({ message: "New Contact Created", contact });
})

// @desc Update Contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler ( async (req,res) => {
    console.log("before contact put")
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        console.log("before status")
        res.status(404).json({message: "kkkk"});
        //console.log("before err")
        //throw new Error("Please Enter Correct ID");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json({message : `Update Contact for ${req.params.id} :`,updatedContact});
});

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler ( async (req,res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    console.log(contact);
    if(!contact){
        res.status(404).json({message : "error"});
        //throw new Error("Please Enter Correct ID");
    }
    //await Contact.remove();
    res.status(200).json({message : `Delete Contact for ${req.params.id} :`,contact});
})

module.exports = { 
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};