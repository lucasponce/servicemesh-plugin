import * as React from 'react';

const GraphPage = () => {
    return (
        <>
            <iframe
                src='http://localhost:3000/console/graph/namespaces/?kiosk=true'
                style={{overflow: 'hidden', height: '100%', width: '100%' }}
                height="100%"
                width="100%"
            />
        </>
    );
};

export default GraphPage;