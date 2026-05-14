import Carousel from 'react-bootstrap/Carousel';

export const MyCarousel = ({ persons }) => {
    return (
        <Carousel
            interval={1500}
            style={{
                width: "1200px",
                margin: "30px auto"
            }}
        >
            {
                persons.map((person, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={`/images/${person.id}.png`}
                            alt={person.name}
                            style={{
                                height: "400px",
                                objectFit: "cover",
                                borderRadius: "15px"
                            }}
                        />

                        <Carousel.Caption
                            style={{
                                background: "rgba(0,0,0,0.5)",
                                borderRadius: "10px",
                                padding: "10px"
                            }}
                        >
                            <h3>{person.name}</h3>

                            <p>Age: {person.age}</p>

                            <p>Address: {person.address}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}