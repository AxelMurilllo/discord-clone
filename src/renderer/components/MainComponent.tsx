import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';

const MainComponent = React.memo((props: any) => {
    return (
        <MDBContainer fluid className="main-component bg-success">
            <MDBRow>
                <MainSidebar />
                <MainDisplay />
            </MDBRow>
        </MDBContainer>
    )

})

export default MainComponent;
