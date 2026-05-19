
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { OrchidsData } from '../data/Orchids.jsx'
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
export default function Orchids() {
    const [show, setShow] = useState(false);
    const [selectedOrchid, setSelectedOrchid] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (orchid) => {
        setSelectedOrchid(orchid);
        setShow(true);
    }
    return (
        <Container>
            <Row>
                {OrchidsData.map((orchid) => (
                    <Col md={3} key={orchid.id}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={orchid.image}
                                style={{
                                    height: '250px',
                                    objectFit: 'cover'
                                }}
                            />
                            <Card.Body>
                                <Card.Title>{orchid.orchidName}</Card.Title>
                                <Card.Text>
                                    {orchid.category}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleShow(orchid)}>
                                    Detail
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={show} onHide={handleClose} centered>

                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedOrchid ? selectedOrchid.orchidName : ''}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    {selectedOrchid ? (

                        <div style={{ textAlign: 'center' }}>

                            <img
                                src={selectedOrchid.image}
                                alt={selectedOrchid.orchidName}
                                style={{
                                    width: '100%',
                                    maxHeight: '400px',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    marginBottom: '15px'
                                }}
                            />

                            <p
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6'
                                }}
                            >
                                {selectedOrchid.description}
                            </p>

                        </div>

                    ) : (

                        <p>Loading details...</p>

                    )}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </Container>
    )
}
