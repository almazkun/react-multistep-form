import React from "react";

import { Form } from "react-bootstrap";

import UserType from "./UserType";
import UserInfo from "./UserInfo";
import UserCPRData from "./UserCPRData";

const stepPages = [
    UserType, UserInfo, UserCPRData
]

const api = {
    post: (url, data) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }
}

const MultiStepForm = () => {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
        userType: "",

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",

        CPR: "",
    });


    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control
                        as={stepPages[step - 1]}
                        formData={formData}
                        setFormData={setFormData}
                        step={step}
                        setStep={setStep}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                            });
                        }}
                        handleSubmit={() => {
                            api.post("http://localhost:8000/api/user/create", formData).then((res) => {
                                console.log(res);
                            }
                            ).catch((err) => {
                                console.log(err);
                            }
                            );
                        }}
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

export default MultiStepForm;