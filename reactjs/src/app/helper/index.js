import React, { useEffect } from "react";
import defaultPic from "../../assets/avatar.jpg";
import { documentTitle } from "../const";

export function getMapValue(obj, key) {
  if (obj.hasOwnProperty(key)) return obj[key];
  return null;
}

export function fetuesrobject(key) {
  let retrieveduserObject = localStorage.getItem("userObject");
  let retrievedObject = JSON.parse(retrieveduserObject);
  if (retrieveduserObject) {
    return getMapValue(retrievedObject, key);
  }
  return 0;
}

export const Avatar = fetuesrobject("user_pic")
  ? fetuesrobject("user_pic")
  : defaultPic;

export const Uid = fetuesrobject("uid") ? fetuesrobject("uid") : "";
export const Username = fetuesrobject("name")
  ? fetuesrobject("name")
  : "Anonymous";

export const IndianRupee = "₹";

let colorversion = ["v1", "v2", "v3"];

export const colorclass =
  colorversion[Math.floor(Math.random() * colorversion.length)];
/**
 * Method used to set page title
 * @param titleOrFn
 */
export function useTitle(titleOrFn) {
  useEffect(() => {
    document.title = `${titleOrFn} | ${documentTitle}`;
  });
}

/**
 * Const used to hide Header and Footer regions.
 * @type {*[]}
 */
export const HideHeaderRegion = ["/login", "/user-register"];

/**
 * Method used to render input field with error highlight.
 *
 * @param {*} param0
 */
export const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={touched && error ? "invalid" : ""}
    />
  </div>
);

/**
 * Method used to render textarea field with error highlight.
 *
 * @param {*} param0
 */
export const renderFieldTextarea = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <textarea
      {...input}
      placeholder={placeholder}
      type={type}
      className={touched && error ? "invalid" : ""}
    ></textarea>
  </div>
);

/**
 * Method used to render input field with error message.
 *
 * @param {*} param0
 */
export const renderFieldError = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

/**
 *
 * @param {string} string
 * @param {integer} limit
 * @param {placeholder} ellipsis
 */
export function substring(string, limit, ellipsis) {
  let text = string;
  if (string && string.length > limit) {
    text = string.substring(0, limit) + ellipsis;
  }
  return text;
}

export function preparecommentobject(commenttxt, nid) {
  const msg = {
    comment_body: commenttxt ? commenttxt : "Pakkalam",
    created: +new Date(),
    uid: Uid,
    subject: commenttxt,
    uname: Username,
    nid: nid,
    avatar: Avatar,
    cid: +new Date()
  };

  return msg;
}

export function querystring(params) {
  const querystring = Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
  return querystring;
}

export function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}

export function toggleMenu(id, flag) {
  //alert(id + "" + flag);
  let field = document.getElementById(id);

  if (flag === "open") {
    var element = document.getElementById("shadow-film");
    element.classList.remove("closed");
    field.classList.remove("closed");
    element.classList.add("open");
    field.classList.add("open");
  } else {
    var element = document.getElementById("shadow-film");
    element.classList.remove("open");
    field.classList.remove("open");
    element.classList.add("closed");
    field.classList.add("closed");
  }
}
