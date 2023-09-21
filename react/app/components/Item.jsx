import React from "react";

const Item = ({ isEnter, onMouseOverToEnter, onMouseOutToLeave }) => {
  console.log("Item", isEnter);
  console.log(isEnter[0][0]);
  return (
    <>
      <li
        className={isEnter[0] ? "enter" : "leave"}
        onMouseEnter={onMouseOverToEnter}
        onMouseLeave={onMouseOutToLeave}
      >
        <div className="select">
          <p className="select-content">
            <span>[맛의고수] 프리미엄 수제 씨앗호떡 5개입</span>
          </p>
          <div className="select-price">
            <div>6,650원</div>
          </div>
        </div>
      </li>
      <li>
        <div className="select">
          <p className="select-content">
            <span>[맛의고수] 프리미엄 수제 씨앗호떡 5개입</span>
          </p>
          <div className="select-price">
            <div>6,650원</div>
          </div>
        </div>
      </li>
      <li>
        <div className="select">
          <p className="select-content">
            <span>[맛의고수] 프리미엄 수제 씨앗호떡 5개입</span>
          </p>
          <div className="select-price">
            <div>6,650원</div>
          </div>
        </div>
      </li>
      <li>
        <div className="select">
          <p className="select-content">
            <span>[맛의고수] 프리미엄 수제 씨앗호떡 5개입</span>
          </p>
          <div className="select-price">
            <div>6,650원</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Item;
