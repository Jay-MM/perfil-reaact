import { useEffect, useState } from 'react';
import Profile from './Profile';
const About = (props) => {
    const [userData, setUserData] = useState('')

    useEffect(() => {
      searchGithub()
    },[])
  
    const searchGithub = () => {
      console.log('searching github...')
      fetch('https://api.github.com/users/Jay-MM')
      .then(response => response.json())
      .then(json => setUserData(json))
    }
  
    return (
    
        <Profile 
        userData={userData}
        syle={{
          marginBottom: '33px'
        }}
        />
    
    )
  }
export default About