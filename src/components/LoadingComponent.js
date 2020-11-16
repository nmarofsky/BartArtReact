import React from 'react';

export const Loading = () => {
    return (
        <div className="col text-center">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading...</p>
        </div>
    );
};