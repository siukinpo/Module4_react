// 想係typescript用emotion就要加呢句
//emotion 係 css in js 嘅其中一款
/** @jsxImportSource @emotion/react */
import React from "react";
import { DiAndroid } from "react-icons/di";
import { css, SerializedStyles } from "@emotion/react";

function InputField(props: {
  className?: string;
  placeholder: string;
  icon: React.ReactNode;
  color?: string;
  //??意思係前面係undefined就用後面，前面有嘢就用前面
  value: string;
  onChange: (text: string) => void;
  //最先打 no.1
}) {
  return (
    <div
      css={css`
        background-color: #fff;
        padding: 4px;
        border-radius: 100px;
        color: ${props.color ?? "#000"};
        margin-bottom: 15px;

        label {
          display: flex;
          align-items: center;

          input {
            border: none;
            padding: 8px;
            background-color: transparent;
          }
        }
      `}
      className={props.className}
    >
      <label htmlFor="">
        <span>{props.icon}</span>
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          // no. 2打
          onChange={(event) => {
            props.onChange(event.currentTarget.value);
          }}
        />
      </label>
    </div>
  );
}

export default InputField;
