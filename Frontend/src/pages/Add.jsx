import React from "react"
import {IntelliWandWindow, AddForm} from "../components";
import {Row, Col} from "react-bootstrap"

const Add = () =>{
    return (
        <div className="items-center">
            <Row className="mx-4 h-full">
                <Col md={2}>
                    <IntelliWandWindow/>
                </Col>
                <Col md={10}>
                        <AddForm />
                </Col>
            </Row>
        </div>
    )
}
export default Add;