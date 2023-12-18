import React, { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import useCustomTheme from "../hook/useCustomTheme";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Layouts from "../Layout/Layout";
import "../../App.css";
import ModalSurvey from "../ModalSurvey";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Table,
  Typography,
  Row,
  Col,
} from "antd";
function InsertData() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useCustomTheme();
  const { Search } = Input;
 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const fixedColumns = [
    {
      title: "รหัสแปลงที่ดิน",
      dataIndex: "parcel_code",
      fixed: true,
      width: 150,
      render: (parcel_code) => <a>{parcel_code}</a>,
    },
    {
      title: "ระวาง",
      dataIndex: "rawang",
      width: 150,
    },
    {
      title: "ชื่อ",
      dataIndex: "owner_first_name",
      width: 200,
    },
    {
      title: "นามสกุล",
      dataIndex: "owner_last_name",
      width: 200,
    },
    {
      title: "เลขบัตรประจำตัวประชาชน",
      dataIndex: "number",
      width: 220,
    },
    {
      title: "เลขที่ดิน",
      dataIndex: "land_no",
      width: 100,
    },
    {
      title: "หน้าสำรวจที่ดิน  ",
      dataIndex: "survey_no",
      width: 150,
    },
    {
      title: "การใช้ประโยชน์",
      dataIndex: "description",
      width: 180,
    },
    {
      title: "หมายเหตุ",
      dataIndex: "note",
      width: 200,
    },
    {
      title: "อัพเดต (วว/ดด/ปป)",
      dataIndex: "description",
      width: 180,
    },
    {
      title: "",
      dataIndex: "",
      fixed:  'right',
      width: 120,
     
        render: (params) => {
          const paramParcelCode = params.parcel_code
          return (
            <>
              <Button
                type="primary"
                onClick={showModal}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                >     
               แก้ไข
              </Button>
            </>
          )}
    },
  ];
  const fixedData = [];
  for (let i = 0; i < 20; i += 1) {
    fixedData.push({
      key: i,
     parcel_code: ["01A001", "02A002", "03A003"][i % 3],
     rawang: "4827II3612-12 ",
     owner_first_name:"อติภัทร",
     owner_last_name:"ไชยภัณฑ์",
     number:"1544022277",
     land_no:"827",
    survey_no:"20482",
    note:"แบ่งแยกจาก......."

    });
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="otherSide" id="otherSide">
        <Layouts />
        <Row className="Row-Box-table">
          <Box className="Box" component='form'>
          <Typography className="title-font"> ทะเบียนคุมการเปลี่ยนแปลงที่ดิน</Typography>
            <Row className="Row-search" >
              <Col span={12} offset={8} >
               
              <Search
                  // className="Button-addData " 
                  style={{width:'30rem'}}
                  placeholder="รหัสแปลงที่ดิน"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                />
                <Button
              className="Button"
              onClick={showModal}
               > <PlusOutlined />เพิ่มข้อมูล
               </Button>
               <ModalSurvey
                title="เพิ่มทะเบียน"
               isModalOpen={isModalOpen}
               setIsModalOpen={setIsModalOpen}
               />
              </Col> 
            </Row>
            <Table
            className="table"
              columns={fixedColumns}
              dataSource={fixedData}
              pagination={false}
              scroll={{
                x: 1000,
                y: 500,
              }}
              bordered
              summary={() => (
                <Table.Summary fixed>
                  <Table.Summary.Row>
                    {/* <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      This is a summary content
                    </Table.Summary.Cell> */}
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Box>
        </Row>
        {/* <Box>
          <FormInput />
        </Box> */}
      </div>
    </ThemeProvider>
  );
}

export default InsertData;
