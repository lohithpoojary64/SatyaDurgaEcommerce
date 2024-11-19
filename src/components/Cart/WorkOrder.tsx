import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Input, Button, Upload } from "antd";
import type { UploadProps } from "antd";

// File upload props
const uploadProps: UploadProps = {
  beforeUpload: (file) => {
    console.log("File uploaded:", file);
    return false; // Prevents auto-uploading
  },
};

const items = [
  {
    key: "1",
    label: (
      <div>
        <div>
          <strong>Work Order Details</strong>
        </div>
        <div className="mt-2">
          <div style={{ border: "1px solid grey", borderRadius: "5px" }}>
            <Upload {...uploadProps}>
              <Button style={{ border: "none" }} className="!text-customBlue ">
                Choose File
              </Button>
            </Upload>
          </div>
        </div>

        <p className="text-xs mt-2">Supports .png .jpg upto 5 MB</p>
        <div style={{ padding: "8px 12px", textAlign: "right" }}>
          <Button type="primary">Submit</Button>
        </div>
      </div>
    ),
  },
];

const App: React.FC = () => (
  <Button type="primary" style={{height:"30px" , width:"70px",position:"relative"}}>
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space >
          <h1 style={{fontSize:"small",position:"relative"}}>Work Order</h1>
         
        </Space>
      </a>
    </Dropdown>
  </Button>
);

export default App;
