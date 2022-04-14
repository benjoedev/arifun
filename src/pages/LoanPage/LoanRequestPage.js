import React from 'react'
import CardComp from '../../cmps/CardComp/CardComp'
import { BsChevronLeft } from 'react-icons/bs'

import './LoanRequestPage.css'

const headerMock1 = {
    headerTitle: '291 North 8 street, Brooklyn, NY',
    reqNo: 'Request no. 203-12209',
    owner: 'Owner: Amir Cohen',
    update: 'Last update: 22/09/22, 18:30'
}
const detailMock1 = [
    { entry: 'Amount', value: '$970,000' },
    { entry: 'Purpose', value: 'Purchase' },
    { entry: 'R.C Date', value: '05.09.22' },
    { entry: 'Duration', value: '12 months' },
    { entry: 'Repayment', value: 'Refinance' },
    { entry: 'Rate', value: '11%' },
    { entry: 'Purchase Price', value: '$630,000' }]

const detailMock2 = [
    { entry: 'Phone', value: '646-3055952' },
    { entry: 'Email', value: 'abraham@real.com' },
    { entry: 'Date Of Birth', value: '02/02/1981' },
    { entry: 'Credit Score', value: '690' }]

const borrowerMock = 'Abraham Gabrielovich'

const LoanPage = () => {
    return (
        <div className='mainContainer'>
            <div className='loanContainer'>
                <div className='leftSideLoan'>
                    <div className='backWrapper'>
                        <BsChevronLeft size={25} />
                        <span>Back to All Requests</span>

                    </div>
                    <CardComp
                        headerDetails={headerMock1}
                        cardDetails={detailMock1}
                    />
                    <br />
                    <CardComp
                        cardDetails={detailMock2}
                        borrower={borrowerMock}
                    />

                    {/* <CardComp name="Property Card" /> */}
                </div>
                <div className='rightSideLoan'>
                    <img className='cardHeaderIcon'
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAA0NDT19fW5ubl1dXV/f3+FhYVjY2P7+/vw8PDf398rKyvX19dycnKioqKtra3Ly8scHBxUVFRpaWkzMzPp6enAwMCMjIympqaSkpJKSkpPT0+xsbHKyso8PDwiIiJEREQLCwtbW1sYGBggICCampoeelQIAAAFrElEQVR4nO2de1viPBDFLRehXISKQFFBEOX7f8T3dRe1lznNhXTSfZ7z+9NNuzmdNJkzKe3dHSGEEEIIIYQQQgghhBB9+vt8mO/7sbvRHvtZ8sVsb9V6usxHMvlu3nJP/dg8Jd88bYyt+/dJE2PzGdS5BjCxC+PktVFgkhy7JnHyUOnhw6Sx/dAgMEleunU7Dz5rPfwcNLTPjAKTZKnWezMT+Z66x2FcWCgcKyowsO2BPva26BDzIE2St64M08ZJ8R708qnhmG/WHVGYoQBew5iJR10sFPY6obCfGzuaSx21mWk6oXB+sujpSUpQqotLNxWmzxb6vnhOa8duzNcmvsL5i6XA/1fvehgnxuk0tsL08i72C/z1Ug9jtngYVyilcpEVTlfyhR9uQGxWU4uzDrqjEOQks68lfjuT/3FhPm1nFE7HsoZrtl3Lwq+MjWHsisLloyjg8dcxCYn4nxamZLobCjcggCXPugFpmcHYdkLh/sMuPEs5jB+N1rgDCjf2txi8WRvCGF/hwGma3MmNZ9gax1aI5ki41KFFE1Y4IivcruX+CunKD2DdXANrXFKo7Q9BpUJKOYvMQU1NrnBsi02UPf7hTe6pYBvKIAPydhAaz4stXk2nDkl/BLppU5tGJnIkxKhYMLDI8oKROfRRABUCTvUKR2H6nTUXXEOCxtlMGmcyGZikamM8/c2F7M9+K2iQDV0mAlSQq1U40uuKdISFyNCkoCqG5nsIKqrW1pr5aPUy3qkN0bnrmo1BZYtVbbZKFSfRhVyT+GjaksAAT/WuOWmWQUmXxe6gjHPa1zI7OYCft+wJ7eXU/X0XrNf2QA972/VGp/UeF97s5UpFgEQDDI1Hu83/UKArfQ5xwyBrrBlGaHQDTePu1jgsaOEy+CQXkKcaqiz0qKDbZHTdaSoptwsyuuIW2S2gfZ2Gzf8gIKMrbnPeRt/FGgf7T4HRPcpb1bcyB/eDpe30ALk49LjBzaTgiq7buaLIiTv7JBcU7wp453v4JBc8S3juIKN7bH8R1lmdUABVEimFDCMFy+9R69m5trPE6Vk+/40+yYVWM32UBn/omlKwr5zc3gtkZRQDeO1IO477bnkEl05zz+C7L3JXbpoN0PAPvhjZEbzyBSsVYVciF8Ck7lnhQFvykQL4F2SNmzb/ESiVaCMjdAB5KmdrjPKIdfwfq8xBMu5W4TioOzMHUmByHHbzJsCW9fS27JpBnmpkGcYsyDBoFbTd+GZljcGt3KrRdQdtN+bmQ8EIbdnouoPmwpHpwIF42FF308AO4KlMY+0kHaS/8WOFnFSemg+aSgHs0o/EyuwlY9BsNg5CACNtwFohearm+bT+a5wYu68u1A16s8LqKI21g+5Archi6HK5eahST6tUCmVnQ/Pi842v8dNsO0qeypiZ/KY01YfKpoPFLosf1DTbLQaV5avwaN3FfIbB3/2XcyWA12dd1HaaEdd1vppjzcd/HnDoWXVvMnjOF9UBuvlJx+M9ofTFT7DW1Sxkuny+HPzdXVoY6TE9VGGaWIW9YYrp6kvQM7tRnFLC3i+l1CHeGllarp9CnrlfMsXxhmkpqQz6rH6/5DfjTaft/aKECrWgQn+oUAsq9IcKtaBCf6hQCyr0hwq1oEJ/qFALKvSHCrWgQn+oUAsq9IcKtaBCf6hQCyr0hwq1oEJ/qFALKvSHCrWgQn+oUAsq9IcKtaBCf6hQCyr0hwq1oEJ/qFALKvSHCrWgQn+oUAsq9IcKtaBCf6hQCyr0hwq1oEJ/qFALKvSHCrWgQn+oUAsq9IcKtaBCf8oK471vd6uk8Dy6j8PorKSwI1AhFVJhfKjQTSF41X5Ugr5V8A58MSgqphcGuwG+0xOVsO/hnoBPekRkHfhbBvVXmccm+Iuq0ceWIlH/pnwAsnzYFfJ/5U3jhBBCCCGEEEIIIYQQ0iH+A61nVmrPAQVXAAAAAElFTkSuQmCC"
                    // width={'auto'}
                    />
                    {/* <CardComp name="Map" /> */}
                    {/* <CardComp name="Acivities" />
                    <CardComp name="3" /> */}
                </div>
            </div>
            {/* 
            <Header name="Analysis Navigation" />

            <div className='anlysisContainer'>
                <CardComp name="1" />
                <CardComp name="2" />
                <CardComp name="3" />
            </div> */}


        </div>
    )
}

export default LoanPage