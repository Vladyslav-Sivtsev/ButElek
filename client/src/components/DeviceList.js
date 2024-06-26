import React, {useContext} from 'react';
import Row from "react-bootstrap/Row";
import {observer} from "mobx-react-lite";
import DeviceItem from "./DeviceItem";
import {Context} from "../index";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device._devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;