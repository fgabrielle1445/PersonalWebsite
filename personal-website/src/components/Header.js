import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import "antd/dist/antd.css";
import './header.css';

 function Header() {
  const { TabPane } = Tabs;
  const navigate = useNavigate();
  
  function handleClick(key) {
    navigate(key);
  }

    return(
        <nav style={{ margin: 10 }}>
        <div className='div-header'>

        <Tabs defaultActiveKey="/" onChange={handleClick}>
    <TabPane tab="Home" key="/" />
    <TabPane tab="About" key="/about" />
    <TabPane tab="Contact" key="/contact" />
    <TabPane tab="Resume" key="/resume" />
    <TabPane tab="Projects" key="/projects" />
  </Tabs>
        </div>
      </nav>      
    );
}

export default Header;