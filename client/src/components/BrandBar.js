import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import {flow} from "mobx";


const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
       <Row className="d-flex" style={{width: '15%'}}   >
           {device._brands.map(brand =>

               <Card
                   style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border = {brand.id === device.setSelectedBrand.id ? 'danger' : 'light'}
               >
                   {brand.name}
               </Card>



           )}
       </Row>
    );
});

export default BrandBar;