import React, { useContext, useState, useEffect, useRef } from "react";
import cx from "classnames";
import "./style.scss";
import { AiOutlineDatabase } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/tableSlice";

export default function Natigation() {
  const dispatch = useDispatch();
  const tables = useSelector(state => state.table.tables);

  console.log(tables);
  return (
    <nav className="navigation">
      <button
        type="button"
        className="addTable"
        onClick={() => {
          dispatch(add(true));
        }}>
        <AiOutlineDatabase />
        <p className="addText">테이블 추가</p>
      </button>
      <p className="naviTitle">테이블 목록</p>
      <ul className="sideMenu">
        {tables.map(table => (
          <li key={table.id + table.title} className="tableTitle">
            {table.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}