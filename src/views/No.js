import Button from '@enact/sandstone/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const No = () => {
    return (
        <div className='but'>
            <Link to='./'>
                <Button>N 돌아가기</Button>
            </Link>
        </div>
    )

}

export default No;