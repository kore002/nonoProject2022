import React from 'react';
import './Sidebar.css';
import { Link, useHistory } from 'react-router-dom';
import { FiHome, FiDatabase, FiFolder, FiSettings } from "react-icons/fi";

const Sidebar = () => {
    const history = useHistory();

    const onClick = () => {
        history.push('/');
    }
    const onLogin = () => {
        history.push('/login');
    }
    const onNotice = () =>{
        history.push('/notice');
    }

    return(
        <div className='sidebar'>
            <div className='head'>
                <div className='logo'>
                    <h4><Link to="/">화성시니어 클럽</Link></h4>
                    <p>노노유통</p>
                </div>
                <div className='UserInfo'>
                    <p>님</p>
                    <Link className='MyPage' onClick={onLogin}>마이페이지</Link>
                </div>
               
                <div className='mainNav'>
                    <ul className='depth1'>
                        <li onClick = {onNotice}><Link to="/" className='liA'><FiHome className='emo'/><p className='liP'>메인페이지</p></Link></li>
                        <li onClick = {onClick}><Link to="/" className='liA'><FiDatabase className='emo'/><p className='liP'>믈픔 관리</p></Link></li>
                        <li onClick = {onClick}><Link to="/" className='liA'><FiFolder className='emo'/><p className='liP'>문서 관리</p></Link></li>
                        <li onClick = {onClick}><Link to="/" className='liA'><FiSettings className='emo'/><p className='liP'>관리자 설정</p></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;