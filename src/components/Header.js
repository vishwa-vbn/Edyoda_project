

import "antd/dist/antd.min.css";
import { Button as MuiButton } from "@mui/material";
import { Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.css";

const Header = () => {
  const courses = [
    { id: 1, name: "JavaScript", link: "https://www.edyoda.com/course/1496" },
    { id: 2, name: "Html5", link: "https://www.edyoda.com/course/1481" },
    { id: 3, name: "React", link: "https://www.edyoda.com/course/1501" },
  ];

  const programs = [
    { id: 1, name: "Data Scientist", link: "https://university.edyoda.com/program/data-scientist-program/?utm_source=UniversityHeader&utm_medium=UniversityHeader&utm_campaign=UniversityHeader&utm_id=UniversityHeader&_ga=2.61087148.1251239643.1685200874-629783145.1685200874" },
    { id: 2, name: "Software Developer", link: "https://university.edyoda.com/program/software-development-engineer-program/registration-form/?utm_source=UniversityHeader&utm_medium=UniversityHeader&utm_campaign=UniversityHeader&utm_id=UniversityHeader&_ga=2.65699118.1251239643.1685200874-629783145.1685200874" },
    { id: 3, name: "Business Development", link: "https://university.edyoda.com/program/business-development-associate-program/registration-form" },
  ];

  const handleLoginClick = () => {
    
  };

    const isMobile = window.innerWidth <= 600;

  return (
    <div className="nav-bar">
      <div className="container">
        <div className="left-content">
          <div className="logo">
            <div className="edyoda">EDYODA</div>
          </div>
          <Dropdown
            overlay={
              <Menu>
                {courses.map((course) => (
                  <Menu.Item key={course.id}>
                    <a href={course.link}>{course.name}</a>
                  </Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomLeft"
            trigger={["hover"]}
            arrow={true}
          >
            <a className="dropsec">
              Courses <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown
            overlay={
              <Menu>
                {programs.map((program) => (
                  <Menu.Item key={program.id}>
                    <a href={program.link}>{program.name}</a>
                  </Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomLeft"
            trigger={["hover"]}
            arrow={true}
          >
            <a className="dropsec">
              Programs <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div className="right-content">
          <div className="search-container">
          {isMobile ? (
            <input type="text" placeholder="search" />
      ) : (
        <input type="text" placeholder="" />
      )}
            
            <img className="search-icon" alt="" src="/search-icon.svg" />
          </div>
          <div className="log-in">
            <div className="text1" onClick={handleLoginClick}>
              Log in
            </div>
          </div>
          <MuiButton variant="contained" color="primary" className="logbtn">
            Join now
          </MuiButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
