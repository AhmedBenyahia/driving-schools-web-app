import React from 'react'
import {
  Link
} from "react-router-dom";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import userImg from '../../../assets/backOffices/img/user.png'
import subscriptionBaseUrl from "../../../helpers/subscription_service_base_url";
import {useDispatch,useSelector} from "react-redux"
import * as actions from "../../../store/actions/common/User"
import {useGoogleAuth} from "../../../views/frontOffice/Home/GoogleLogin/GoogleAuthProvider";
const TheHeaderDropdown = (props) => {
  const dispatch=useDispatch()
  const user = useSelector(state => state.user.user)
  let img=null;
  if(props.avatar){
    img=subscriptionBaseUrl+"/storage/avatars/"+props.avatar;
  }else{
    img=userImg;
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar" >
          <CImg
            src={img}
            className="c-avatar-img"
            style={{width:"36px",
              height:"36px"}}
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon name="cilCheck" className="mfe-2" />
          {props.fullName}
        </CDropdownItem>
        {
          user.agency?
              <>
                <CDropdownItem divider />
                <CDropdownItem to={'/companies'}>
                  <CIcon name="cilBank" className="mfe-2" />
                  Agency
                </CDropdownItem>
              </>

              :
              null
        }
        <CDropdownItem divider />
        <CDropdownItem to={`/administrator/profile`}>
          <CIcon name="cil-user" className="mfe-2" />
           Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={()=>{dispatch(actions.logout());props.history.push({pathname:"/"})}}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
              Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
