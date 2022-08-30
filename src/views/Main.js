import Button from '@enact/sandstone/Button';
import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () =>{
	return (
		<div className='main'>
			<div className='sub'>
				<div className='title'>구성원이 배송품을 수령했습니까?</div>
				<div className='but'>
					<Link to='/y'>
						<Button backgroundOpacity='transparent' size='small'>예</Button>
					</Link>
					<Link to='/n'>
						<Button backgroundOpacity='transparent' size='small'>아니오</Button>
					</Link>
				</div>
			</div>
		</div>
		
	)
}

export default Main;
