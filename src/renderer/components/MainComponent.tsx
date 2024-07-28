import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import MainSidebar from './main-subs/MainSidebar';
import MainDisplay from './main-subs/MainDisplay';

const MainComponent = React.memo((props: any) => {
    return (
        <MDBContainer fluid className="main-component bg-success">
            <MDBRow className="w-100 h-100">
                <MainSidebar />
                <MainDisplay />
            </MDBRow>
        </MDBContainer>
    )

})

export default MainComponent;
