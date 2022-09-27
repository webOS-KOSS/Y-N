import Button from '@enact/sandstone/Button';
import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import LS2Request from '@enact/webos/LS2Request';

const bridge = new LS2Request();

const Main = () =>{
	
	return (
		<div className='main'>
			<div className='sub'>
				<div className='title'>구성원이 배송품을 수령했습니까?</div>
				<div className='but'>
					<Button backgroundOpacity='transparent' size='small' onClick={yesServiceStart}>예</Button>
					</div>
					<div className='but'>
					<Button backgroundOpacity='transparent' size='small' onClick={noServiceStart}>아니오</Button>
					</div>
			</div>
		</div>
	)
}

function yesServiceStart(){
	var lsRequest = {
		service:"luna://com.delivery.app.service",
		method:"yesServiceStart",
		parameters: {},
		onSuccess: (msg) => {console.log(msg);},
		onFailure: (msg) => {console.log(msg);},
	}
	bridge.send(lsRequest);
}

function noServiceStart(){
	var lsRequest = {
		service:"luna://com.delivery.app.service",
		method:"noServiceStart",
		parameters: {},
		onSuccess: (msg) => {console.log(msg);},
		onFailure: (msg) => {console.log(msg);},
	}
	bridge.send(lsRequest);
}

export default Main;
