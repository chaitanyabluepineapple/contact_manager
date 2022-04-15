import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        phone: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.phone === "" && this.state.email === "")
        {
            alert("Please Fill All the Fields")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", phone: "", email: ""});
    }
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Insert Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})} />
                    </div>

                    <div className="field">
                        <label>Phone Number</label>
                        <input type="text" name="phone" placeholder="Insert Phone Number" value={this.state.phone} onChange={ (e) => this.setState({phone: e.target.value})} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Insert Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} />
                    </div>

                    <button className="ui button blue">
                        Add Contact
                    </button>
                
                </form>
            </div>
        );
    }
}

export default AddContact