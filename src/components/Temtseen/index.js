/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import axios from "axios"
import { Layout, Menu, Icon, Carousel, img, message, Button, Modal, Form, Input, Upload } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import tableStyle from './index.css';
import img4 from '../assets/zurag4.jpg';
import img5 from '../assets/zurag5.jpg';
import img6 from '../assets/zurag6.jpg';


const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      tloading: false,
      data: [],
      row: [],
      isModalVisible: false,
      setIsModalVisible: false,
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Бүртгэл";
    // this.refreshList();
  }

  // refreshList = async () => {
  //   this.setState({ tloading: true });
  //   let result = await fetch("http://10.0.10.11:8881/api/category", {
  //     method: "GET",
  //   })
  //   result = await result.json();
  //   if (result.success === true) {
  //     this.setState({ tloading: false, data: result.data });
  //   } else {
  //     message.error(result.data)
  //   }
  // }

  // onFinish = async (values) => {

  //   let test = new FormData();
  //   test.append("file", values.contractfile[0].originFileObj)
  //   test.append("image", values.upload[0].originFileObj)
  //   test.append("json", JSON.stringify(values))
  //   console.log(values)


  //   const options = {
  //     method: "POST",
  //     data: test,
  //     url: `http://10.0.10.11:8881/api/addcategory`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   let res = await axios(options).catch((err) => {
  //   });
  // };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleRowClick = (record) => { this.setState({ row: record }); }
  handleRowClass = record => (record.id === this.state.row.id ? tableStyle.selected : '');

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  handleChangeImg = ({ fileList }) => {
    if (this.state.size) {
      this.setState({ file: fileList });
      this.props.form.setFieldsValue({ file: fileList });
    }
  };

  normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  render() {
    const { tloading, data, isModalVisible } = this.state;
    return (
      <div>
       <div>
        <Carousel autoplay  >
              <div className="contentStyle">
              <img alt="" src={img4} />
              </div>
              <div  className="contentStyle">
              <img alt="" src={img5} />
              </div>
              <div className="contentStyle">
              <img alt="" src={img6} />
              </div>
              
            </Carousel>

</div>
      </div>
    )
  }
}

export default Home;