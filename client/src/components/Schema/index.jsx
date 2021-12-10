import React, { useContext, useState, useEffect, useRef } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import "./style.scss";

export default function Schema() {
  const currentTable = useSelector(state => state.table.currentTable);
  const currentSchemaData = useSelector(state => state.table.currentSchemaData);

  return (
    <div className="schemaContainer">
      <p className="tableName">{currentTable} 테이블</p>
      <p className="schemaLabel">스키마 조회</p>
      <ul>
        {currentSchemaData.map(attribute => (
          <li key={attribute.Field + attribute.Null}>
            <form className="attribute">
              <span className="attributeLabel"># {attribute.Field}</span>
              <span className="attributeLabel">
                {attribute.Type.toUpperCase()}
              </span>
              <span className="attributeLabel">
                {attribute.Null === "NO" ? "NOT NULL" : "NULL 허용 "}
              </span>
              {attribute.Default && (
                <span className="attributeLabel">
                  DEFAULT: {attribute.Default}
                </span>
              )}
              {attribute.key && (
                <span className="attributeLabel">
                  {attribute.key === "PRI" ? "PRIMARY KEY" : "FOREIGN KEY"}
                </span>
              )}
              {attribute.Extra && (
                <span className="attributeLabel">{attribute.Extra}</span>
              )}
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
