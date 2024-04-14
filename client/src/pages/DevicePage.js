import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Bigstar from "../assets/Bigstar.png";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
const DevicePage = () => {
    const device = {id:1, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" };
    const description = [
        {id:1, title: "Samsung A23", description: 2500043 },
        {id:1, title: "Samsung A23", description: 25000343 }
    ]
    return (

       <Container className="mt-3">
           <Row>
           <Col md={4}>
               <Image widt={300} height={300} src={device.img}/>
           </Col>

           <Col md={4}>
                <Row classname="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                     <div
                         className = "d-flex align-items-center justify-content-center"
                         style={{background: `url(${Bigstar}) no-repeat center`,width:240,height:240}}
                     >
                         {device.rating}
                     </div>
                </Row>
           </Col>

           <Col md={4}>
                <Card classname="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height: 300, fontSize: 32,border: '5px solid lightgray'}}
                >
                    <h3>{device.price}</h3>
                    <Button variant={"outline-dark"}>
                        Add i Basket
                    </Button>
                </Card>
           </Col>
           </Row>
           <Row className="d-flex flex-column m-3">
               <h1>Description</h1>
               {description.map(info =>
                   <Row key={info.id} style = {{backround: info.id % 2 === 0? 'lightgray' : 'transparent', padding:10}}>
                       {info.title}:{info.description}
                   </Row>
               )}
           </Row>

       </Container>
    );
};

export default DevicePage;