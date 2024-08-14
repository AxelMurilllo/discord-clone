import React from 'react';
import Icons from '../../shared/icons';

const SubDisplayHeader = React.memo((props: any) => {
    return (
        <div>
            <div>
                <Icons.HashSign />
                <span>notes-resources</span>
            </div>
            <div>
                <Icons.Thread />
                <Icons.Notification />
                <Icons.Pinned />
                <Icons.Users />
                <div className="search-blox">
                    <input type="text" placeholder="Search" />
                    <Icons.Search />
                    
                </div>
            </div>
        </div>
    )
})