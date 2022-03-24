import * as React from 'react';

const OverviewPage = () => {
    return (
        <>
            <iframe
                src='http://localhost:3000/console/overview/?kiosk=true'
                style={{overflow: 'hidden', height: '100%', width: '100%' }}
                height="100%"
                width="100%"
            />
        </>
    );
};

export default OverviewPage;