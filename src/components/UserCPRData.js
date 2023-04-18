import * as React from "react";

import { Form, Button } from "react-bootstrap";

const UserCPRData = (formData, onChange, handleSubmit ) => {
    return (
        <div>
            <h1>User CPR Data</h1>
            <Form.Group>
                <Form.Label>CPR</Form.Label>
                <Form.Control type="text" name="CPR" placeholder="Enter CPR" value={formData.CPR} onChange={ e =>  onChange(e) } />
            </Form.Group>
            <Button disabled={(formData.CPR === "")} onClick={() => handleSubmit()}>Submit</Button>
        </div>
    );
}

export default UserCPRData;