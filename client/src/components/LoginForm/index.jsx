import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import cx from "classnames";
import http from "../../common/axios";
import "./style.scss";

export default function LoginForm() {
  const [message, setMessage] = useState("");
  const [isFocusId, setFocusId] = useState(false);
  const [isFocusPw, setFocusPw] = useState(false);
  const [isLock, setLock] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const userId = register("userId", { required: true });
  const password = register("password", { required: true });

  useEffect(() => {
    if (errors.userId) {
      setMessage("아이디를 입력해주세요.");
      return;
    }
    if (errors.password) {
      setMessage("비밀번호를 입력해주세요.");
      return;
    }
    setMessage("");
  }, [errors.userId, errors.password]);

  const onSubmit = async data => {
    // console.log(data);
    // try {
    //   const response = await http.post(`login`, data);
    //   localStorage.setItem("isAuthorized", response.success);
    //   if (response.success) navigate("/");
    // } catch (e) {
    //   console.log(e);
    // }
    navigate("/");
  };

  return (
    <main className="loginForm">
      <span className="title">Check Mate 관리자</span>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div
          className={cx("box", "idBox", {
            focus: isFocusId,
          })}>
          <IoPersonOutline className="icon" />
          <input
            className="input"
            placeholder="아이디"
            name={userId.name}
            onChange={userId.onChange}
            onFocus={() => setFocusId(true)}
            onBlur={() => setFocusId(false)}
            ref={userId.ref}
          />
        </div>
        <div
          className={cx("box", "pwBox", {
            focus: isFocusPw,
          })}>
          <button
            className="lockBox"
            type="button"
            onClick={() => setLock(!isLock)}>
            {isLock ? (
              <AiOutlineLock className="lock" />
            ) : (
              <AiOutlineUnlock className="unLock" />
            )}
          </button>
          <input
            type={isLock ? "password" : "text"}
            className="input"
            placeholder="비밀번호"
            name={password.name}
            onChange={password.onChange}
            onFocus={() => setFocusPw(true)}
            onBlur={() => setFocusPw(false)}
            ref={password.ref}
          />
        </div>
        <p className="message">{message}</p>

        <input className="submit" type="submit" value="로그인" />
      </form>
      <img
        className="img"
        alt="Check Mate"
        src="https://user-images.githubusercontent.com/62797441/145247515-e5027855-1073-4960-a832-6fba3db17772.png"
      />
    </main>
  );
}
