import * as React from 'react';

interface IBadge {
    
}

export const Badge: React.FunctionComponent<IBadge> = (badge) => {
    return (
        <>
            <span className="badge badge-primary">{badge.children}</span>
            <span>&nbsp;</span>
        </>
    );
}