import React, { Component } from "react";
import { Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
import tableStyle from "./index.css";
import img1 from "../../assets/Epee5.svg";
import img2 from "../../assets/Epee1.svg";
const { Paragraph } = Typography;
const blockContent = `


Эртний халз тулааны зэвсэгээс үүссэн үзүүрээр хатгаж оноо авна. Өрсөлдөгчийн 
биеийн бүх хэсэгт буюу толгойноос хөл хүртэл аль ч хэсэгт 750 гр-аас дээш 
жингийн даралттай хатгасан  үед тооцно. Сэлэмний нийт урт нь 110 см 
ба ирний урт нь хөнгөн сэлэмнийхтэй адил 90 см байна. Гарын хамгаалалтын 
диаметр 13,5 см. Бариул, гарын хамгаалалт, ирний төмрийн жингээс хамаарч 
нийт  жин 750-850 грамм байдаг.

`;
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
    document.querySelector("title").innerHTML = "Хүнд сэлэм";
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

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleRowClick = (record) => {
    this.setState({ row: record });
  };
  handleRowClass = (record) =>
    record.id === this.state.row.id ? tableStyle.selected : "";

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
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Хүнд сэлэм</h1>
        <Row>
          <Col span={12}>
            <Paragraph
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   width: "1400px",
            //   height: "400px",
            //   margin: "left",
            //   textAlign: "center",
            // }}
            >
              <pre style={{ textAlign: "center" }}>
                {blockContent} <br />
                <center>
                  <img
                    alt=""
                    src={img2}
                    style={{ width: "500px", height: "150px" }}
                  />
                </center>
              </pre>
            </Paragraph>
          </Col>
          <Col span={12}>
            <img alt="" src={img1} />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Home;
