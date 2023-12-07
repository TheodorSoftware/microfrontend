import { mount as mountMarketing } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const marketingAppReg = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mountMarketing(marketingAppReg.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathName } = history.location;

                console.log(pathName);
                if (pathName !== nextPathName) {
                    history.push(nextPathName);
                }
            }
        });

        // history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={marketingAppReg}>

        </div>
    )
}
