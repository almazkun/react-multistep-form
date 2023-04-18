import * as React from "react";

import { Form , Button } from "react-bootstrap";

const UserType = ({ formData, setFormData, step, setStep }) => {
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>User Type</h1>
            <Form.Group>
                <Form.Label>Choose User Type</Form.Label>
                <Form.Check type="radio" name="userType" value="user" onChange={(e) => { onChange(e) }} checked={formData.userType === "user"} label="User" />
                <Form.Check type="radio" name="userType" value="admin" onChange={(e) => { onChange(e) }} checked={formData.userType === "admin"} label="Admin" />
            </Form.Group>
            <Button disabled={(formData.userType === "")} onClick={() => {setStep(step + 1);}}>Next</Button>
        </div>
    );
}

export default UserType;