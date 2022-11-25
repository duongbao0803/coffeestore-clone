import { Col, Input, Row, Radio, Button } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import COD from "../images/payment/COD.jpg";
import momo from "../images/payment/momo.jpg";
import paypal from "../images/payment/paypal.jpg";

const Purchase = () => {
  const [valuePayment, setValuePayment] = useState("COD");
  const onChangePayment = (e) => {
    setValuePayment(e.target.value);
  };
  return (
    <div className="container max-w-[1024px] h-full py-20 mx-auto flex  ">
      <Col
        span={14}
        className="border-r-[1px] border-solid border-[#CFCFCF] pr-[40px]"
      >
        <Title level={2}>THÔNG TIN GIAO HÀNG</Title>
        <Input
          type="text"
          size="medium"
          name="name"
          placeholder="Họ tên"
          className="rounded-md py-2 my-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
          //   onChange={(e) => handleChangeForm(e)}
          //   value={userInfo.email}
          required
        />
        <Input
          type="text"
          size="medium"
          name="phone"
          placeholder="Số điện thoại"
          className="rounded-md py-2 mb-3  placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
          //   onChange={(e) => handleChangeForm(e)}
          //   value={userInfo.email}
          required
        />
        <Input
          type="email"
          size="medium"
          name="email"
          placeholder="Email"
          className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
          //   onChange={(e) => handleChangeForm(e)}
          //   value={userInfo.email}
          required
        />
        <Input
          type="text"
          size="medium"
          name="address"
          placeholder="Địa chỉ"
          className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
          //   onChange={(e) => handleChangeForm(e)}
          //   value={userInfo.email}
          required
        />
        <Row gutter={10}>
          <Col span={8}>
            <Input
              type="text"
              size="medium"
              name="Provice"
              placeholder="Tỉnh/Thành phố"
              className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              //   onChange={(e) => handleChangeForm(e)}
              //   value={userInfo.email}
              required
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              size="medium"
              name="Provice"
              placeholder="Quận/Huyện"
              className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              //   onChange={(e) => handleChangeForm(e)}
              //   value={userInfo.email}
              required
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              size="medium"
              name="Provice"
              placeholder="Phường/Xã"
              className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              //   onChange={(e) => handleChangeForm(e)}
              //   value={userInfo.email}
              required
            />
          </Col>
        </Row>
        <Input
          type="text"
          size="medium"
          name="address"
          placeholder="Note (Không bắt buộc)"
          className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
          //   onChange={(e) => handleChangeForm(e)}
          //   value={userInfo.email}
          required
        />

        <Title className="mt-16" level={2}>
          PHƯƠNG THỨC THANH TOÁN
        </Title>
        <div>
          <div className="flex items-center border-solid border-[#CFCFCF] border-[1px] rounded-md py-2 cursor-pointer mb-4">
            <input
              id="COD"
              type="radio"
              name="payment"
              value="COD"
              className="mx-6 checked:accent-[#146d4d]  "
            />
            <label className="flex items-center cursor-pointer" for="COD">
              <img className="w-4 h-4" src={COD} />
              <p className="mb-0 mx-6 font-semibold">COD</p>
            </label>
          </div>
          <div className="flex items-center border-solid border-[#CFCFCF] border-[1px] rounded-md py-2 cursor-pointer mb-4">
            <input
              id="MOMO"
              type="radio"
              name="payment"
              value="MOMO"
              className="mx-6 checked:accent-[#146d4d]  "
            />
            <label className="flex items-center cursor-pointer" for="MOMO">
              <img className="w-4 h-4" src={momo} />
              <p className="mb-0 mx-6 font-semibold">Momo</p>
            </label>
          </div>
          <div className="flex items-center border-solid border-[#CFCFCF] border-[1px] rounded-md py-2 cursor-pointer mb-4">
            <input
              id="PAYPAL"
              type="radio"
              name="payment"
              value="PAYPAL"
              className="mx-6 checked:accent-[#146d4d]  "
            />
            <label className="flex items-center cursor-pointer" for="PAYPAL">
              <img className="w-4 h-4" src={paypal} />
              <p className="mb-0 mx-6 font-semibold">Paypal</p>
            </label>
          </div>
        </div>
      </Col>
      <Col className="h-full pl-[40px]" span={10}>
        <div className="w-full px-6 h-[70vh] border-[1px] border-solid border-[#F5F5F6] bg-[#F5F5F6] rounded-2xl ">
          <Title
            className="border-b-[0.01rem] border-solid border-[#C6BDBD] py-3 mt-3"
            level={5}
          >
            ORDER SUMMARY
          </Title>
          <div className="w-full border-b-[0.01rem] pb-16 border-solid border-[#C6BDBD] ">
            <div className="w-full flex mt-10 justify-between ">
              <p>PHỤ THU</p>
              <p>5.000 VND</p>
            </div>
            <div className="w-full flex mt-10 justify-between ">
              <p>THUẾ GTGT</p>
              <p>5.000 VND</p>
            </div>
          </div>
          <div className="w-full flex mt-10 justify-between ">
            <p>TỔNG CỘNG</p>
            <p>5.000 VND</p>
          </div>
          <Button className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.8rem] font-bold">
            Purchase
          </Button>
        </div>
      </Col>
    </div>
  );
};

export default Purchase;
