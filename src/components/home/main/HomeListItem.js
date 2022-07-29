import React from 'react';
import './HomeListItem.css';
import { Link } from 'react-router-dom';
// import {AiOutlineUnorderedList, AiOutlinePlus} from 'react-icons/ai';
const HomeListItem = () => {
    return (
        <div className='home row'>
                <div className='mainBot'>
                        <ul className='mainList'>
                            <li>
                                <div>
                                    <h3>공지사항</h3>
                                    <Link to="" className='bule'>AiOutlineUnorderedList</Link>
                                    <button onClick={""}></button>
                                </div>
                                <p>새로운 공지를 입력하세요</p>
                            </li>
                        </ul>
                    </div>
            </div>
    
    );
};

export default HomeListItem;