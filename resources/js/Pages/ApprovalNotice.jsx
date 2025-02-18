import React from 'react';

import { useSelector } from 'react-redux';

const ApprovalNotice = () => {
    const translations = useSelector((state) => state.translations.translations);
    return (
        <div className="text-center py-10">
            <h1 className="text-2xl font-bold mb-4">{translations?.accpendapprov || 'loading.'}</h1>
            <p>{translations?.accpendapprovtext}</p>
        </div>
    );
};

export default ApprovalNotice;
