import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import Layout from './sharedComponent/layout'


const Home = (props) =>{
  useEffect(() => {
    props.fetchUsers()
  }, [])

  return props.userData.loading ? (<h2>Loading</h2>) : props.userData.error ? (<h2>{props.userData.error}</h2>) : (
    <Layout >
    <div className="home_box">
      <h2>Users List</h2>
      <div>
        {props.userData &&
          props.userData.users &&
          props.userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  </Layout>
  )
  
}



const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
