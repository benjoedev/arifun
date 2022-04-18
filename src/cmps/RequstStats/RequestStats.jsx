import React from 'react';
import './RequestStats.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const mockStats = 'Pre Term Sheet'
const mockTestText = 'The application data corresponds to the requirements. In order to continue to the next step send\n' +
    '                        term sheet to the borrower'

const RequestStats = () => {
    return (
        <>
            <div className='container-fluid stats-block'>
                <div className='row'>
                    <div className='col-lg-10 col-md-9 left-block'>
                        <p className='stats-p stats-title'>Status <span className='stats-title-text'>{mockStats}</span></p>
                        <p className='stats-p stats-inform-text'>{mockTestText}</p>
                    </div>

                    <div className='col-lg-2 col-md-3 right-block'>
                        <button className='btn-stats btn-top'>View & Edit</button>
                        <button className='btn-stats btn-bottom'>Send Term Sheet</button>
                    </div>
                </div>
            </div>
            <div className='stats-block-footer'/>
        </>
    );
};

export default RequestStats;