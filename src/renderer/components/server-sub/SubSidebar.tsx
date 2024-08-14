import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import SubSidebarHeader from "../utils/SubSiderbarHeader";
import LevelBoostUI from "../utils/LevelBoostUI";
import ChannelList from "../utils/ChannelList";

const SubSidebar = React.memo((props: any) => {
    return (
        <MDBCol md={3} className="sub-sidebar p-0">
            <SubSidebarHeader />
            <div className="sub-sidebar-inner px-2">
                <LevelBoostUI />

                <ChannelList />
            </div>
        </MDBCol>
    )

})

export default SubSidebar