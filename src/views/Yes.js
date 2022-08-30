import Button from '@enact/sandstone/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Yes.css'

const Yes = () => {
    return (
        <div className='but'>
            <Link to='./'>
                <Button>Y 돌아가기</Button>
            </Link>
        </div>
        
    )

}

export default Yes;