import React, { useEffect, useRef } from 'react';

const TabDraw = () => {
    const canvasRef = useRef(null)
    const colors = document.getElementsByClassName("jsColor");
    const range = document.getElementById("jsRange");
    const mode = document.getElementById("jsMode");
    const saveBtn = document.getElementById("jsSave");

    const INITIAL_COLOR = "2c2c2c";
    const CANVAS_SIZE_W = 800;
    const CANVAS_SIZE_H = 500;
    useEffect(()=>{
        if (!canvasRef) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
    
        // 캔버스 사이즈 설정
        canvas.width = CANVAS_SIZE_W
        canvas.height = CANVAS_SIZE_H

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H);
    
        ctx.strokeStyle = INITIAL_COLOR;
        ctx.fillStyle = INITIAL_COLOR;
        ctx.lineWidth = 2.5;

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
                //console.log("creating path in" , x ,y);
                ctx.beginPath();   //경로 생성
                ctx.moveTo(x, y);   //선 시작 좌표
            } else {
                //console.log("creating line in" , x ,y);
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

    },[])
    


    // function handleColorClick(event) {
    //     const color = event.target.style.backgroundColor;
    //     ctx.strokeStyle = color;
    //     ctx.fillStyle = color;
    // }

    // function handleRangeChange(event) {
    //     const size = event.target.value;
    //     ctx.lineWidth = size;
    // }

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
    return (
        <div className="">
            <div className='tab-title'>
                <div className='dark:text-white'>Canvas Drawing</div>
                <div>
                </div>
            </div>
            <div className='tab-content'>

                <div>
                    <canvas ref={canvasRef} class="canvas"></canvas>
                </div>

                <div class="controls">
                    <div class="controls_range">
                        <input type="range" id="jsRange" min="0.1" max="5.0" value="2.5" step="0.1" />
                    </div>
                    <div class="controls_btns">
                        <button id="jsMode">Fill</button>
                        <button id="jsSave">Save</button>
                    </div>
                    <div class="controls_colors" id="jsColors">
                        <div class="controls_color jsColor bg-black"></div>
                        <div class="controls_color jsColor bg-white"></div>
                        <div class="controls_color jsColor bg-red"></div>
                        <div class="controls_color jsColor bg-orange"></div>
                        <div class="controls_color jsColor bg-green"></div>
                        <div class="controls_color jsColor bg-sky"></div>
                        <div class="controls_color jsColor bg-blue"></div>
                        <div class="controls_color jsColor bg-navy"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TabDraw;