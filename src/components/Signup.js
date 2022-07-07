import React, {useState} from 'react';
import './App.scss';

function App() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confpassword , setConfPassword] = useState('');


    //function to update state of name
    //value enter by the user in form
    const handleChange = (e) => {
        setName(e.target.value);
    }
    //function to update state of email
    //value enter by the user in form
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    //function to update state of name
    //value enter by the user in form
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    //function to update state of name
    //value enter by the user in form
    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    }
    //function when submit button is clicked
    const handleSubmit = (e) => {
        if(password != confpassword) {
            console.log("passwords dont match");
        }else {
            console.log('A form was submitted with the name :"'+ name);
        }
        e.preventDefault();
    }
 }

 return(
    <div className="Signup">
        <header className="Signup-header">
            <form onSubmit={(e) => { handleSubmit(e)}}>
                <h2></h2>
                <h3>Sign Up Form</h3>
                <label>
                    Name:
                </label><br />
                <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br />
                <input type="submit" value="Submit" />
            </form>
        </header>
    </div>
 )