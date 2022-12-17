import React from "react";
import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Radio,
  Row,
  Upload,
  Spin,
  message,
  Popconfirm,
  notification,
} from "antd";
import Title from "antd/lib/typography/Title";
import { LoadingOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import axios from "axios";
import { createBlog, getAllBlogs, updateBlog } from "../../api/admin/Blog";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../reducer/user/userAction";
import { useEffect } from "react";
import { getBlogAction } from "../../reducer/admin/blog/blogAction";
import { useLocation, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const blogID = location.state.id;
  const { TextArea } = Input;
  const { user, status } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  //   const [blogInfo, setBlogInfo] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [detailBlog, setDetaiBlog] = useState({
    MoTa: "",
    NoiDung: "",
    TieuDe: "",
    UrlImage: "",
  });
  const handleChangeForm = (e) => {
    setDetaiBlog({ ...detailBlog, [e.target.name]: e.target.value });
    console.log(detailBlog);
  };

  //   useEffect(() => {
  //     dispatch(getUserProfile());
  //     console.log("aaab", blogInfo);
  //     setBlogInfo({ ...blogInfo, MaND: user.id, NgayBlog: new Date() });
  //   }, [status]);
  const onChangeImage = async (e) => {
    // setIsFirst(false);
    console.log(e.target.files[0]);
    const urlImage = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(urlImage);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "themorrii");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dql5y1xex/image/upload",
      formData
    );
    const url = res.data.secure_url;
    setDetaiBlog({ ...detailBlog, UrlImage: url });
    console.log(url);
  };
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const handleCkeditor = (event, editor) => {
    const a = '">';
    const b = '"/>';
    const data = editor.getData().replaceAll(a, b);

    setDetaiBlog({ ...detailBlog, NoiDung: data });
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  useEffect(() => {
    const getBlogDetail = async () => {
      const res = await getAllBlogs();
      const listBlog = res.blog;
      const detailBlog1 = listBlog.find(
        (blog) => parseInt(blog.id) === parseInt(blogID)
      );
      if (res.status === true) {
        console.log("tin", detailBlog1);
        setDetaiBlog(detailBlog1);
        setIsLoading(false);
      }
    };
    getBlogDetail();
  }, [isLoading]);
  const handleCreateBlog = async (type) => {
    console.log(detailBlog);
    if (
      detailBlog.TieuDe == "" ||
      detailBlog.NoiDung == "" ||
      detailBlog.MoTa == ""
    ) {
      notification["error"]({
        message: "Thất bại",
        description:
          "Bạn đã tạo blog thất bại, vui lòng nhập đầy đủ các trường kể cả hình ảnh",
      });
    } else {
      const res = await updateBlog(detailBlog);
      console.log(res.status);
      if (res.status === true) {
        notification["success"]({
          message: "Thành công",
          description: "Bạn đã cập nhật blog thành công",
        });
        navigate("/admin/blog");
        dispatch(getBlogAction());
      }
    }
  };
  return (
    <div className="container w-full mx-auto max-w-[900px] mt-5 ">
      <div className="flex">
        <Title className="font-bold " level={2}>
          Thêm Mới Blog
        </Title>
        {isLoading && <Spin indicator={antIcon} />}
      </div>
      <Row className="w-full mb-8 flex items-center my-5">
        <Col span={6} className="">
          <Title className="w-full  my-auto " level={5}>
            Ảnh Blog
          </Title>
        </Col>
        <Col span={18}>
          <div className="flex items-center w-full justify-between ">
            {detailBlog.UrlImage && (
              <Image
                preview={false}
                className="w-16 h-16"
                src={detailBlog.UrlImage}
                alt="avatar"
              />
            )}

            <p className="mb-0 w-[25rem]">Đây sẽ là ảnh Blog của bạn</p>
            <input
              className="w-[16rem] pl-5 "
              type="file"
              name="urlavt"
              onChange={(e) => onChangeImage(e)}
            />
          </div>
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Tiêu đề</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="TieuDe"
            placeholder="Tiêu đề"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            value={detailBlog.TieuDe}
            required
          />
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Mô tả</Title>
        </Col>
        <Col span={18}>
          <TextArea
            rows={3}
            type="text"
            size="medium"
            name="MoTa"
            placeholder="Mô tả"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            value={detailBlog.MoTa}
            required
          />
        </Col>
      </Row>
      <Row className="w-full mb-8  items-center ">
        <Col span={6} className="">
          <Title level={5}>Nội Dung</Title>
        </Col>
        <Col span={18}>
          <CKEditor
            editor={ClassicEditor}
            data={detailBlog.NoiDung}
            // onReady={(editor) => {
            //   // You can store the "editor" and use when it is needed.
            //   console.log("Editor is ready to use!", editor);
            // }}
            onChange={(event, editor) => handleCkeditor(event, editor)}
            // onBlur={(event, editor) => {
            //   console.log("Blur.", editor);
            // }}
            // onFocus={(event, editor) => {
            //   console.log("Focus.", editor);
            // }}
          />
        </Col>
      </Row>

      <div className="flex h-[40px] justify-end">
        <Button
          onClick={() => handleCreateBlog("success")}
          className="bg-[#146d4d] text-[#fff]"
        >
          Cập nhật Blog
        </Button>
      </div>
    </div>
  );
};

export default EditBlog;
