import React, { useEffect, useRef, useState } from 'react';

const TabDraw = () => {
    const canvasRef = useRef(null)
    const mode = document.getElementById("jsMode");
    const saveBtn = document.getElementById("jsSave");

    const CANVAS_SIZE_W = 800;
    const CANVAS_SIZE_H = 500;

    const [range, setRange] = useState(2.5)
    
    const colors = ['bg-black', 'bg-white', 'bg-red', 'bg-orange', 'bg-green', 'bg-sky', 'bg-blue', 'bg-navy']
    const INITIAL_COLOR = "2c2c2c";
    const [color, setColor] = useState(INITIAL_COLOR)

    useEffect(() => {
        if (!canvasRef) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // 캔버스 사이즈 설정
        canvas.width = CANVAS_SIZE_W
        canvas.height = CANVAS_SIZE_H

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = range;

        let painting = false;
        let filling = false;

        function stopPainting() {
            painting = false;
        }

        function startPainting() {
            painting = true;
        }

        function onMouseMove(event) {
            const x = event.offsetX;
            const y = event.offsetY;
            if (!painting) {
                ctx.beginPath();   //경로 생성
                ctx.moveTo(x, y);   //선 시작 좌표
            } else {
                ctx.lineTo(x, y);   //선 끝 좌표
                ctx.stroke();   //선 그리기
                //ctx.closePath();  //현대미술같은 선들..
            }
        }

        function handleCanvasClick() {
            if (filling) {
                ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H);
            }
        }

        function handleCM(event) {
            event.preventDefault();
        }

        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", handleCanvasClick);
        canvas.addEventListener("contextmenu", handleCM)

    }, [])

    // function handleModeClick() {
    //     if (filling === true) {
    //         filling = false;
    //         mode.innerText = "FILL";
    //     } else {
    //         filling = true;
    //         mode.innerText = "PAINT"

    //     }
    // }




    // function handleSaveClick() {
    //     const image = canvas.toDataURL();
    //     const link = document.createElement("a");
    //     link.href = image;
    //     link.download = "PaintJS[🎨]";
    //     link.click();
    // }



    // Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

    // if (range) {
    //     range.addEventListener("input", handleRangeChange);
    // }

    // if (mode) {
    //     mode.addEventListener("click", handleModeClick);
    // }

    // if (saveBtn) {
    //     saveBtn.addEventListener("click", handleSaveClick);
    // }

    const handleRange = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const size = e.target.value;
        setRange(size)
        ctx.lineWidth = size;
    }

    const handleColor = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const colorItem = e.target.style.backgroundColor;
        console.log(e.target);
        setColor(colorItem)
        ctx.strokeStyle = colorItem;
        ctx.fillStyle = colorItem;
    }

    return (
        <div className="">
            <div className='tab-title'>
                <div className='dark:text-white'>Canvas Drawing</div>
                <div>
                    <div className="controls_btns">
                        <button id="jsMode">Fill</button>
                        <button id="jsSave">Save</button>
                    </div>
                </div>
            </div>
            <div className='tab-content'>

                <div className="controls">
                    <div className="controls_colors" id="jsColors">
                        {colors.map((item, index) => {
                            return (<div className={`controls_color jsColor ${item}`} key={index} onClick={handleColor}></div>)
                        })}
                    </div>
                    <div className="controls_range">
                        <input type="range" id="jsRange" min="0.1" max="10.0" value={range} step="0.1" onChange={handleRange} />
                    </div>
                </div>

                <div>
                    <canvas ref={canvasRef} className="canvas"></canvas>
                </div>

            </div>

        </div>
    );
};

export default TabDraw;