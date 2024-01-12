import React, { useEffect, useRef, useState } from 'react';

const TabDraw = () => {
    const canvasRef = useRef(null)
    const CANVAS_SIZE_W = 800;
    const CANVAS_SIZE_H = 500;

    const [range, setRange] = useState(5.0)

    const [mode, setMode] = useState('paint')
    let modeRef = useRef('paint')

    const colors = [
        { class: 'bg-black', color: '#2c2c2c', name: 'black' },
        { class: 'bg-white', color: '#ffffff', name: 'white' },
        { class: 'bg-red', color: '#FF3B30', name: 'red' },
        { class: 'bg-orange', color: '#ff9500', name: 'orange' },
        { class: 'bg-green', color: '#4cd963', name: 'green' },
        { class: 'bg-sky', color: '#5ac8fa', name: 'sky' },
        { class: 'bg-blue', color: '#0579ff', name: 'blue' },
        { class: 'bg-navy', color: '#5856d6', name: 'navy' },
    ]
    const INITIAL_COLOR = "#2c2c2c";
    const [color, setColor] = useState(INITIAL_COLOR)

    const colordata = document.getElementsByClassName("jsColor");

    useEffect(() => {
        if (!canvasRef) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // 캔버스 사이즈 설정
        canvas.width = CANVAS_SIZE_W
        canvas.height = CANVAS_SIZE_H

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = range;

        let painting = false;

        function startPainting() {
            if (modeRef.current === 'paint') {
                painting = true;
            }
            else {
                ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H);
            }
        }

        function stopPainting() {
            if (modeRef.current !== 'paint') return;
            painting = false;
        }

        function onMouseMove(e) {
            if (modeRef.current !== 'paint') return;
            const x = e.offsetX;
            const y = e.offsetY;
            if (!painting) {
                ctx.beginPath();    //경로 생성
                ctx.moveTo(x, y);   //선 시작 좌표
            } else {
                ctx.lineTo(x, y);   //선 끝 좌표
                ctx.stroke();       //선 그리기
                // ctx.closePath();  //현대미술같은 선들..
            }
        }

        function handleCM(e) {
            e.preventDefault();
        }

        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("contextmenu", handleCM)

    }, [])


    useEffect(() => {
        console.log("[mode]", mode);
        modeRef.current = mode;

    }, [mode])

    const handleRange = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const size = e.target.value;
        setRange(size)
        ctx.lineWidth = size;
    }

    const handleColor = (item) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const colorItem = item.color;
        console.log(colorItem);
        setColor(colorItem)
        ctx.strokeStyle = colorItem;
        ctx.fillStyle = colorItem;
    }

    const handleMode = (e) => {
        setMode(e.target.id)
    }

    const handleSaveClick = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = image;
        link.download = "PaintJS[🎨]";
        link.click();
    }

    return (
        <div className="">
            <div className='tab-title'>
                <div className='dark:text-white'>Canvas Drawing</div>
                <div>
                    <div> color : {colors.find(x => x.color === color)?.name} </div>
                    <div className="controls_btns">
                        <button id="paint" className={`jsMode ${mode === 'paint' ? 'active' : ''}`} onClick={handleMode}>PAINT</button>
                        <button id="fill" className={`jsMode ${mode === 'fill' ? 'active' : ''}`} onClick={handleMode}>FILL</button>
                        <button id="jsSave" onClick={handleSaveClick}>Save</button>
                    </div>
                </div>
            </div>
            <div className='tab-content'>

                <div className="controls">
                    <div className="controls_colors" id="jsColors">
                        {colors.map((item, index) => {
                            return (<div className={`controls_color jsColor ${item.class} ${color === item.color ? 'active-on' : ''}`}
                                key={index}
                                onClick={() => handleColor(item)}></div>
                            )
                        })}
                    </div>
                    <div className="controls_range">
                        <input type="range" id="jsRange" min="0.1" max="10.0" value={range} step="0.1" onChange={handleRange} />
                    </div>
                </div>

                <div>
                    <canvas ref={canvasRef} className={`canvas ${mode}`}></canvas>
                </div>

            </div>

        </div>
    );
};

export default TabDraw;