import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import ServerBtn from "../utils/ServerBtns";

const MainSidebar = React.memo((props: any) => {
    return (
        <MDBCol md={3} className = "main-sidebar flex-wrap d-flex bg-info">
            <div className="w-100 bg-danger" style={{height: 10, flexShrink: 0}}></div>
            <ServerBtn 
            title='Test Server' 
            url="server/0"
            img="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg"
            />

        </MDBCol>
    )
})

export default MainSidebar;