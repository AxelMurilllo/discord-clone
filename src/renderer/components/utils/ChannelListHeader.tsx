import React from "react";
import Icons from "../../shared/icons";

const ChannelHeader = React.memo((props: any) => {
    return (
        <div className="channel-header">
            <div>
                <Icons.AngleBottom />
                <span>Information</span>
            </div>
            <Icons.Plus />
        </div>
    )
})

export default ChannelHeader;