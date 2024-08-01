import React from "react";
import { IServerBtn } from "../../shared/types";

const ServerBtn = React.memo(({icon, img, title, url}: IServerBtn) => {
    return (
        <div className="channel-btn mb-2">
            {
                icon || <img src={img} alt="" />
            }
        </div>
    )
})

export default ServerBtn