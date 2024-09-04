import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, GiftOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Modal, Input, Button, notification,Card } from 'antd';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './NavBar.css';


const NavBar = ({ toggleCart }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Static credentials
  const staticEmail = "ayur@gmail.com";
  const staticPassword = "123";

const handleLogin = () => {  

  if (email === staticEmail && password === staticPassword) {
    notification.success({
      message: "🎉 Success!",
      description: "Login Successful! Welcome to your Dashboard.",
      placement: "topRight",
    });
    setIsLoginModalOpen(false);
    setEmail("");
    setPassword("");
    navigate("/dashboard");
  } else {
    notification.error({
      message: "⚠️ Error",
      description: "Invalid email or password. Please try again.",
      placement: "topRight",
    });
  }

}

  const trending = [
    { label: "Honey Soap" },
    { label: "Hair Oil" },
    { label: "Candles" },
  ];

  return (
    <>
      <div className="shipping">
        <img src="./aro.png" alt="..." />
        <p>FREE SHIPPING ON ORDERS OVER $50</p>
      </div>
      <nav className="nav-bar">
        <div className="nav-section">
          <Link to="/" className="nav-item">
            HOME
          </Link>
          <Link to="/blog" className="nav-item">
            BLOG
          </Link>
          <Link to="/sale" className="nav-item">
            SALE
          </Link>
          <Link to="/contact" className="nav-item">
            CONTACT
          </Link>
        </div>
        <div className="nav-brand">
          <Link to="/" className="logo">
            AYURA
          </Link>
        </div>
        <div className="nav-section">
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={trending}
              sx={{
                width: 250,
                "& .MuiInputBase-root": {
                  color: "black",
                  borderColor: "grey",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "green",
                },
              }}
              renderInput={(params) => (
                <TextField {...params} label="Search..." />
              )}
            />
          </div>
          <a
            href="#"
            className="nav-item"
            id="icon-large"
            onClick={handleLoginClick}
          >
            <UserOutlined style={{ fontSize: "24px" }} /> Log In
          </a>
          <a href="#" className="nav-item">
            <GiftOutlined style={{ fontSize: "24px" }} />
          </a>
          <a href="#" className="nav-item" onClick={toggleCart}>
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
          </a>
        </div>
      </nav>

      <Modal
        title="ADMIN LOGIN "
        open={isLoginModalOpen}
        onCancel={closeLoginModal}
        footer={null}
        centered
      >
        <div className="login-form">
          <Input
            // placeholder="Email: ayur@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Input.Password
            // placeholder="Password: 123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <Button
            type="primary"
            block
            onClick={handleLogin}
            style={{
              backgroundColor: "#ffe4e1", 
              borderColor: "#ffcccb", 
              color: "#333", 

              fontSize: "16px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "2px",
              padding: "15px",
            }}
          >
            Admin Login
          </Button>
        </div>

        <Card style={{ marginTop: "20px", textAlign: "center" }}>
          <p>
            <strong>Email:</strong> ayur@gmail.com
          </p>
          <p>
            <strong>Password:</strong> 123
          </p>
        </Card>

        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <p>This is a demo website, please try it.</p>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
