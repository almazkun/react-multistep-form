import * as React from "react";

import { Form, Button, Col } from "react-bootstrap";

const api = {
    post: (url, data) => {
        if (data.email === "asd@asd.asd") {
            return Promise.resolve({
                data: {
                    available: false
                }
            });
        } else {
            return Promise.resolve({
                data: {
                    available: true
                }
            });
        }
    }
}


const UserInfo = ({ formData, setFormData, step, setStep }) => {
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        if (formData.firstName === "") {
            return false;
        }
        if (formData.lastName === "") {
            return false;
        }
        if (formData.email === "") {
            return false;
        }
        if (formData.password === "") {
            return false;
        }
        if (formData.confirmPassword === "") {
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            return false;
        }
        return true;
    };


    const makeAvailabilityCheck = () => {
        api.post("/api/user/availability", {
            email: formData.email
        }).then((res) => {
            if (res.data.available) {
                setStep(step + 1);
            } else {
                setFormData({
                    ...formData,
                    email: ""
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    
    const handleNext = () => {
        makeAvailabilityCheck();
    };


    return (
        <div>
            <h1>User Info</h1>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" value={formData.firstName} onChange={(e) => { onChange(e) }} name="firstName" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" value={formData.lastName} onChange={(e) => { onChange(e) }} name="lastName" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={formData.email} onChange={(e) => { onChange(e) }} name="email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={formData.password} onChange={(e) => { onChange(e) }} name="password" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => { onChange(e) }} name="confirmPassword" />
            </Form.Group>
            <Col>
                <Button onClick={() => { setStep(step - 1); }}>Back</Button>
                <Button disabled={!validate()} onClick={() => { handleNext() }}>Next</Button>
            </Col>
        </div>
    );
}

export default UserInfo;