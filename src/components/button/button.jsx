import { Modal } from "antd";
import "./button.scss";
import { useState } from "react";
import { Form } from "../form";

export const Button = ({
  children,
  className = "",
  color = "",
  hover,
  bg = "",
  bgLine = "",
  width = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`button ${className}`}
        style={{
          "--color": color,
          "--hover": hover,
          "--bg": bg,
          "--bgLine": bgLine,
        }}
      >
        <svg
          className="button__svg"
          width={`${width}`}
          height="60"
          viewBox={`0 0 ${width} 60`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="170"
            height="59"
            rx="29.5"
            stroke="url(#paint0_linear_1_45)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_45"
              x1="144"
              y1="4.60642e-06"
              x2="18.5"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E2B671" />
              <stop offset="1" stopColor="#36A112" />
            </linearGradient>
          </defs>
        </svg>
        <p className="button__text">{children}</p>
      </button>

      <Modal
        title="Contact us"
        open={isOpen}
        footer={[]}
        onCancel={() => setIsOpen(false)}
      >
        <Form className="form-modal" />
      </Modal>
    </>
  );
};
