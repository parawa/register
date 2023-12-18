import {
  Box,
  Typography,
  ThemeProvider,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useCustomTheme from "./hook/useCustomTheme";
import "../../src/components/FormInput.css";
import { Col, Row, Modal, Form, Input, Select, Divider,Button } from "antd";

function ModalSurvey({ isModalOpen, setIsModalOpen }) {
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const { theme } = useCustomTheme();
  const handleOk = () => {
    setIsModalOpen(false);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handFinish = () => {
    setIsModalOpen(false);
  };
  const personType = [
    { id: 1, value: "บุคคลธรรมดา" },
    { id: 2, value: "นิติบุคคล" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box className="Box-backgroud">
        <Row>
          {/* <Typography>เลขบัตรประชาชน</Typography> */}
          <Modal
           
            open={isModalOpen}
            // onOk={handleOk}
            onCancel={handleCancel}
            // onFinish={handFinish}
            width={1000}
            height={100}
          >
            {/* <Box> */}
            {/* <Typography>ข้อมูลเจ้าของ</Typography> */}
            <Divider orientation="left" plain>
              ข้อมูลเจ้าของ
            </Divider>
            <Row gutter={[16, 16]}>
              {/* <Typography>ประเภทบุคคล : </Typography> */}
              <Col span={12}>
                <Form.Item label="ประเภทบุคคล">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Row
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Form.Item label="ชื่อ">
                    <Input />
                  </Form.Item>
                  <Form.Item label="นามสกุล">
                    <Input />
                  </Form.Item>
                </Row>
              </Col>
              <Col flex={4}>
                <Form.Item label="เลขบัตรประจำตัวประชาชน">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Divider orientation="left" plain>
              ที่อยู่
            </Divider>
            <Col>
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Item label="เลขที่">
                  <Input />
                </Form.Item>
                <Form.Item label="หมู่">
                  <Input />
                </Form.Item>
                <Form.Item label="ถนน">
                  <Input />
                </Form.Item>
                <Form.Item label="ตำบล">
                  <Input />
                </Form.Item>
              </Row>
            </Col>
            <Divider orientation="left" plain>
              ข้อมูลที่ดิน
            </Divider>
            <Col>
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Item label="ระวาง">
                  <Input />
                </Form.Item>
                <Form.Item label="เลขเอกสารสิทธิ์">
                  <Input />
                </Form.Item>
                <Form.Item label="เลขที่ดิน">
                  <Input />
                </Form.Item>
                <Form.Item label="หน้าสำรวจ">
                  <Input />
                </Form.Item>
                <Form.Item label="ไร่">
                  <Input />
                </Form.Item>
                <Form.Item label="งาน">
                  <Input />
                </Form.Item>
                <Form.Item label="ตารางวา">
                  <Input />
                </Form.Item>
              </Row>
              <Form.Item label="การใช้ประโยชน์">
                  <Input />
                </Form.Item>
            </Col>
            {/* <Button type="primary"  htmlType="button" onClick={ onFinish}>
            submit
          </Button> */}
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>
            {/* <Row  gutter={[16, 16]}> */}
            {/* </Row> */}
          </Modal>
        </Row>
      </Box>
    </ThemeProvider>
  );
}

export default ModalSurvey;
