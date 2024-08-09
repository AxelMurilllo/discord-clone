import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from "mdb-react-ui-kit";
import React from "react";

const SubSidebarHeader = React.memo((props: any) => {
    return (
        <MDBDropdown class Name='sub-sidebar-header'>
            <MDBDropdownToggle>
                <div>Axel's Server</div>
                </MDBDropdownToggle>
            <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>filler</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    )
})

export default SubSidebarHeader