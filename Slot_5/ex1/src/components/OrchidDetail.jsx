import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function OrchidDetail({
                                         show,
                                         handleClose,
                                         selectedOrchid
                                     }) {

    return (

        <Modal show={show} onHide={handleClose} centered>

            <Modal.Header closeButton>

                <Modal.Title>
                    {selectedOrchid
                        ? selectedOrchid.orchidName
                        : ''}
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

                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Close
                </Button>

            </Modal.Footer>

        </Modal>
    )
}