import { mount as mountMarketing } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const marketingAppReg = useRef(null);

    useEffect(() => {
        mountMarketing(marketingAppReg.current);
    });

    return (
        <div ref={marketingAppReg}>

        </div>
    )
}
