import "./Landing.scss";
import { useState } from "react";
import { setNewId } from "@/assets/common";

const Landing = () => {
  const [list, setList] = useState<any[]>([]);

  const [clickedCard, setClickedCard] = useState<any>();

  const [mode, setMode] = useState<string>("pen");

  const [penPointList, setPenPointList] = useState<any[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleMode = (value: string) => {
    setMode(value);
  };

  const handlePenPoint = (event: any) => {
    console.log(event);
    setPenPointList([
      ...penPointList,
      {
        items: {
          width: 10,
          height: 10,
          top: event.pageY - 82,
          left: event.pageX - 10,
        },
        key: setNewId().toFixed(),
      },
    ]);
  };

  const addCard = (): void => {
    setList([
      ...list,
      {
        items: {
          width: 20,
          height: 20,
          top: 0,
          left: 0,
        },
        key: setNewId().toFixed(),
      },
    ]);
  };

  const handleClickedCard = (key: any) => {
    setClickedCard(key);
  };

  const changesizeBlock = (event: any) => {
    console.log(event);
    if (event.clientX === 0 || event.clientY === 0) return;

    setList(
      list.map((item) => {
        if (item.key === clickedCard) {
          return {
            ...item,
            items: {
              ...item.items,
              width: item.items.width + event.pageY, // Y좌표를 top에 설정
              height: item.items.height - event.pageX, // X좌표를 left에 설정
            },
          };
        }
        return item;
      })
    );
  };
  const moveBlock = (event: any) => {
    console.log(1);
    if (event.clientX === 0 || event.clientY === 0) return;

    setList(
      list.map((item) => {
        if (item.key === clickedCard) {
          return {
            ...item,
            items: {
              ...item.items,
              top: event.pageY - 82, // Y좌표를 top에 설정
              left: event.pageX - 10, // X좌표를 left에 설정
            },
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="editer">
        <div onClick={addCard}>addData</div>
        <div
          onClick={() => handleMode(mode === "pen" ? "" : "pen")}
          style={{ border: mode === "pen" ? "1px solid black" : "" }}
        >
          pen
        </div>
      </div>
      <div
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        onMouseMove={isClicked ? (event) => handlePenPoint(event) : () => {}}
        className="landing-body"
      >
        {list.map((item) => {
          return (
            <div
              key={item.key}
              style={{
                top: item.items.top + "px",
                left: item.items.left + "px",
                width: item.items.width + "px",
                height: item.items.height + "px",
              }}
              className="card"
            >
              <div
                onDragStart={() => handleClickedCard(item.key)}
                onDrag={(event) => moveBlock(event)}
                draggable
                key={item.key}
                className="drag-point"
              ></div>
              <div
                draggable
                onDragStart={() => handleClickedCard(item.key)}
                onDrag={(event) => changesizeBlock(event)}
                className="size-point"
              ></div>
            </div>
          );
        })}

        {penPointList.map((item) => {
          return (
            <div
              key={item.key}
              style={{
                top: item.items.top + "px",
                left: item.items.left + "px",
              }}
              className="penPoint"
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Landing;
