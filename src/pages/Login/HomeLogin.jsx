import React,{useState} from 'react'
import Login from './Login';
import Resiger from './Resiger';
import '../../styles/styleHomeLogin.css'
import Line37 from '../../assets/images/line37.png'
import bg from '../../assets/images/bg.webp'

export default function HomeLogin() {
  const [currentTab, setCurrentTab] = useState('Register');

  const renderTabContent = () => {
  switch (currentTab) {
      case 'Resiger':
          return <Resiger />;
      case 'Login':
          return <Login />;
      default:
          return <Resiger />;;}};
  return (
    <div>
        <div className='flex h-screen'>
        <div className="bg-blue-50 w-full max-lg:hidden" style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            {/* <img src={bg} alt="" /> */}
            img
        </div>

        <div className="w-full mx-28 max-lg:mx-2">
            <div className="p-10">logo</div>
            <div className='flex justify-around py-2'>
              <button className={`button ${currentTab === 'Register' ? 'active-button' : ''}`} onClick={() => setCurrentTab('Register')}>Đăng Ký</button>
              <div className='p-1'></div>
              <button className={`button ${currentTab === 'Login' ? 'active-button' : ''}`} onClick={() => setCurrentTab('Login')}>Đăng Nhập</button>
            </div>
              {renderTabContent()}
        </div>
        </div>

          <img src={Line37} alt="" className='w-full h-3 fixed bottom-0'/>

    </div>
  )
}
