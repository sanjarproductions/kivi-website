import { TextField } from "@mui/material";
import { Button, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { API_URL, CHAT_ID } from "../../api";
import axios from "axios";
import { useRef, useState } from "react";

export const Form = ({ className = "" }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const telRef = useRef(null);

  const handleSendMessage = (evt) => {
    evt.preventDefault();

    const text = `<b>Заявка c сайта Kivi</b>\n<b>Отправитель: ${nameRef.current?.value}</b>\n<b>Телефон: ${telRef.current?.value}</b>`;
    const data = {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text,
    };
    const key = "updatable";

    (async () => {
      try {
        setLoading(true);
        messageApi.open({
          key,
          type: "loading",
          content: "Loading...",
        });
        await axios.post(API_URL, data);
        messageApi.open({
          key,
          type: "success",
          content: "Your request has been successfully delivered",
        });
      } catch (error) {
        console.log(error.response);
        messageApi.open({
          key,
          type: "error",
          content: error.response.data.description
            ? error.response.data.description
            : "Request Error",
        });
      } finally {
        setLoading(false);
      }
    })();
  };
  return (
    <>
      {contextHolder}
      <form
        onSubmit={handleSendMessage}
        className={`footer__form-form ${className}`}
        data-aos="zoom-in-up"
      >
        <div className="mb-4 mt-4">
          <TextField
            type="text"
            className="footer__input"
            label="Name"
            variant="standard"
            inputRef={nameRef}
            required
          />
        </div>
        <div>
          <TextField
            type="tel"
            className="footer__input"
            label="Phone"
            variant="standard"
            inputRef={telRef}
            required
          />
        </div>
        <Button htmlType="submit" loading={loading} className="footer__button">
          <ArrowRightOutlined />
        </Button>
      </form>
    </>
  );
};
