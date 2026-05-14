import Card from 'react-bootstrap/Card';

export const MyProfile = ({ person: { name, age, address,id } }) => {
    return (
        <Card
            style={{
                width: "300px",
                margin: "20px auto",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
        >
            <Card.Img
                variant="top"
                src={`/images/${id}.png`}
                style={{
                    height: "300px",
                    objectFit: "cover"
                }}
            />

            <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>{name}</Card.Title>

                <Card.Text>
                    <strong>Age:</strong> {age}
                </Card.Text>

                <Card.Text>
                    <strong>Address:</strong> {address}
                </Card.Text>
                <button
                    style={{
                        backgroundColor: "#0d6efd",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        marginTop: "10px",
                        fontWeight: "bold"
                    }}
                >
                    Detail
                </button>
            </Card.Body>
        </Card>
    );
}