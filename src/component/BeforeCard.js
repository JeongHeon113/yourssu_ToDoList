import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const BeforeCard = ({ list, setList }) => {
  const [value, setValue] = useState("");
  
  const startList = (item) => {
    const updateList = list.map((listItem) =>
      listItem === item ? { ...listItem, start: true } : listItem
    );
    setList(updateList);
  };
  const addList = (value) => {
    setList([
      ...list,
      {
        id: Math.random(),
        value: value,
        start: false,
        done: false,
      },
    ]);
    setValue("");
  };
  const beforeCount = list.filter(
    (item) => item.done === false && item.start === false
  ).length;
  return (
    <div>
      <div className="list_state">
        <div className="list_name" id="before_title">시작 전</div>
        <div>{beforeCount}</div>
      </div>
      {list.map((item) => {
        if (item.done === false && item.start === false) {
          return (
            <Card id="list-content">
              <div>{item.value}</div>
              <button onClick={() => startList(item)}>시작</button>
            </Card>
          );
        }
      })}
      <div id="list-add">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="새로 만들기"
        />
        <div className="add_button" onClick={() => addList(value)}>
          추가
        </div>
      </div>
    </div>
  );
};

export default BeforeCard;
