import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { showuser } from '../state/action-creator';

function C1({p}) {
     const dispatch = useDispatch();
     const name=useSelector((state)=> state.user_authReducer)
     useEffect(() => {
      dispatch(showuser())
     }, [dispatch])
     console.log(name);
  return (
    <div>C1</div>
  )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         p: state
//     }
// }
export default C1 