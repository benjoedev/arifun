import React from 'react';
import './MockScssFromRouter.css'
import {useDispatch, useSelector} from "react-redux";
import {decreaseNum, increaseNum} from "../../redux/actions/mockActions";

const Dashboard = () => {

    const {count} = useSelector(store => store.mockReducer)
    const dispatch = useDispatch()

    const increaseN = () => {
        dispatch(increaseNum())
    }

    const decreaseN = () => {
        dispatch(decreaseNum())
    }

    return (
        <div className='router-pages-test'>
            <h1>Dashboard</h1> <br/>

            {/*<button onClick={increaseN} className='mock-btn'>Increase</button>*/}
            {/*<div>{count}</div>*/}
            {/*<button onClick={decreaseN}  className='mock-btn'>Decrease</button>*/}

        </div>
    );
};

export default Dashboard;