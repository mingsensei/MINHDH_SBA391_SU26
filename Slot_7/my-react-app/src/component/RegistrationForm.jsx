import { useState } from "react";
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Card,
    Alert
} from "react-bootstrap";

function RegistrationForm() {

    // State form
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // State lỗi
    const [errors, setErrors] = useState({});

    // State success
    const [success, setSuccess] = useState(false);

    // Validate từng field
    const validateField = (name, value) => {

        let error = "";

        switch (name) {

            case "fullName":
                if (!value.trim()) {
                    error = "Full name is required";
                }
                break;

            case "email":
                if (!value) {
                    error = "Email is required";
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = "Invalid email format";
                }
                break;

            case "password":
                if (!value) {
                    error = "Password is required";
                } else if (value.length < 6) {
                    error =
                        "Password must be at least 6 characters";
                }
                break;

            case "confirmPassword":
                if (!value) {
                    error = "Confirm password is required";
                } else if (value !== formData.password) {
                    error = "Passwords do not match";
                }
                break;

            default:
                break;
        }

        return error;
    };

    // Handle change
    const handleChange = (e) => {

        const { name, value } = e.target;

        // Update form
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate realtime
        const error = validateField(name, value);

        setErrors({
            ...errors,
            [name]: error
        });

        // Tắt success khi user sửa dữ liệu
        setSuccess(false);
    };

    // Validate toàn bộ form
    const validateForm = () => {

        const newErrors = {};

        Object.keys(formData).forEach((field) => {

            const error = validateField(
                field,
                formData[field]
            );

            if (error) {
                newErrors[field] = error;
            }

        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit form
    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateForm()) {

            setSuccess(true);

            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            setErrors({});
        }
    };

    // Reset form
    const handleCancel = () => {

        setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });

        setErrors({});
        setSuccess(false);
    };

    return (

        <Container
            fluid
            className="vh-100 d-flex justify-content-center align-items-center bg-light"
        >

            <Row className="w-100 justify-content-center">

                <Col md={6} lg={5}>

                    <Card className="shadow-lg border-0 rounded-4">

                        <Card.Body className="p-4">

                            <h2 className="text-center text-primary fw-bold mb-4">
                                Registration Form
                            </h2>

                            {/* Success Alert */}
                            {success && (
                                <Alert variant="success">
                                    Registration Successful!
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>

                                {/* Full Name */}
                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Full Name
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        isInvalid={
                                            !!errors.fullName
                                        }
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.fullName}
                                    </Form.Control.Feedback>

                                </Form.Group>

                                {/* Email */}
                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Email
                                    </Form.Label>

                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={
                                            !!errors.email
                                        }
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>

                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Password
                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={
                                            !!errors.password
                                        }
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>

                                </Form.Group>

                                {/* Confirm Password */}
                                <Form.Group className="mb-4">

                                    <Form.Label>
                                        Confirm Password
                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={
                                            formData.confirmPassword
                                        }
                                        onChange={handleChange}
                                        isInvalid={
                                            !!errors.confirmPassword
                                        }
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>

                                </Form.Group>

                                {/* Buttons */}
                                <div className="d-grid gap-2">

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                    >
                                        Register
                                    </Button>

                                    <Button
                                        variant="outline-secondary"
                                        type="button"
                                        size="lg"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>

                                </div>

                            </Form>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>
    );
}

export default RegistrationForm;