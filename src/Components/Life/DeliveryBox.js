import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';
import '../SideBar/SideBar2/SideBarItem2.scss';
import '../SideBar/SideBar2/SideBarContent2.scss';
import { life } from '../../assets/constants';
import './DeliveryBox.scss';
import Kakao from '../Map/Kakao';

const DeliveryBox = () => {
  //   return (
  // <>
  //   <div id='deliveryBox'>
  //     <div className='rec_center2'>
  //       Life
  //       <div className='side2'>
  //         <div className='sidebar2'>
  //           {life.map((menu, index) => {
  //             return (
  //               <NavLink
  //                 style={{ textDecoration: 'none' }}
  //                 to={menu.path}
  //                 key={index}
  //               >
  //                 <SideBarItem2 menu={menu} />
  //               </NavLink>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //     {/* <Kakao Category='무인택배함' /> */}
  //   </div>
  // </>
  //   );
};

export default DeliveryBox;
