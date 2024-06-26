import React from 'react';
import Col from "react-bootstrap/Col";
import {Card,Image} from "react-bootstrap";
import star from "../assets/star.png";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
     const history = useNavigate()

    return (
        <Col md={3} classname={"mt-3"} className={"mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: "pointer"}} bordered={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={17} height={17} src={star}/>
                    </div>

                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;