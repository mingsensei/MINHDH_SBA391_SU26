import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { OrchidsData } from '../data/Orchids.jsx'
import { useState } from "react"
import OrchidDetail from './OrchidDetail'

export default function Orchids() {

    const [show, setShow] = useState(false)
    const [selectedOrchid, setSelectedOrchid] = useState(null)

    const handleClose = () => setShow(false)

    const handleShow = (orchid) => {
        setSelectedOrchid(orchid)
        setShow(true)
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

                                <Card.Title>
                                    {orchid.orchidName}
                                </Card.Title>

                                <Card.Text>
                                    {orchid.category}
                                </Card.Text>

                                <Button
                                    variant="primary"
                                    onClick={() => handleShow(orchid)}
                                >
                                    Detail
                                </Button>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

            <OrchidDetail
                show={show}
                handleClose={handleClose}
                selectedOrchid={selectedOrchid}
            />

        </Container>
    )
}