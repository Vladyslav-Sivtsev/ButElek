import React, {useContext} from 'react';
import {observer} from  "mobx-react-lite"
import {Context} from "../index";
import ListGroup from 'react-bootstrap/ListGroup';
import {type} from "@testing-library/user-event/dist/type";


const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup>
            {device._types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === device._selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>

            )}
        </ListGroup>
    );
});

export default TypeBar;