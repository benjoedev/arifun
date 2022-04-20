import React from 'react';
import './RequestPage.css'
import {Link} from "react-router-dom";

const requestMockArr = [
    {
        id: '0001',
        address: 'USA'
    },
    {
        id: '0002',
        address: 'Israel'
    },
    {
        id: '0003',
        address: 'Canada'
    },
]


const RequestPage = () => {
    return (
        <div className='wrapper-request-page'>
            {
                requestMockArr.map((el, idx) => (
                    <div
                        key={el.id} className='request-block'
                        data-id={el.id}
                    >
                        <Link to='/requests/loanpage:' className='link-loan_page'>Go to Loan Page</Link>
                        {/*<Link to= className='link-loan_page'>Go to Loan Page</Link>*/}

                        <span> {el.id}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default RequestPage;