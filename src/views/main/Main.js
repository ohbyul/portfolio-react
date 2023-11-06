import React, { useEffect, useRef, useState } from 'react';

const Main = () => {
    //file 불러오기
    const fileRef = useRef(null)
    const [file, setFile] = useState('');
    const [imageSrc , setImageSrc] = useState(null)

    //canvas
    const canvasRef = useRef(null);
    const [ctx,setCtx] = useState(null)
    const [canvas,setCanvas] = useState(null)
  
    const canvasRef2 = useRef(null);

    useEffect( ()=> {
        imgOnCanvas(imageSrc)
    },[imageSrc])

    const onLoadFile = (e) => {
        const file = e.target.files
        if(file.length == 0){
           console.log("non choice file");
           return 
        }
        if(!valideImageType(file[0])) {
            alert('jpg, jpeg, png 형식의 파일만 입력 가능합니다.');
		}
        if(!valideSizeCheck(file[0])){
            alert('이미지 용량은 10MB를 초과하실 수 없습니다.')
        }
        setFile(file[0])
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    //업로드파일 확장자 체크
    const valideImageType = (image) => {
        const result = ([ 'image/jpeg',
                          'image/png',
                          'image/jpg' ].indexOf(image.type) > -1);
        return result;
    }
    //업로드파일 사이즈 체크 10MB
    const valideSizeCheck = (image) => {
        const maxSize  = 10 * 1024 * 1024    //10MB
        const fileSize = image.size
        if(fileSize > maxSize){
            return false
        }else{
            return true
        }
    }

    //canvas 
    const imgOnCanvas = (imageSrc) => {
        if (!canvasRef) return;
        const canvas = canvasRef.current;
        const ctx = canvasRef.current.getContext("2d");

        setCanvas(canvas)
        setCtx(ctx);

        const image = new Image();
        image.src =imageSrc
    
        image.onload = function() {
            console.log("-------------------------");
            //입력 파일의 크기를 알아냄
            let inW = image.width;
            let inH = image.height;
            console.log("image - size",inW,inH);
      

            //--------------------------------------------1
            // 캔버스 기본 크기
            let canW = canvas.width
            let canH = canvas.height
            console.log("canvas - size1",canW,canH);
      
            //캔버스 크기를 결정
            canvas.width = 700;
            canvas.height = 500;
            console.log("canvas - size2",canW,canH);
      
            //(0,0)을 중심으로 n*m 의 사이즈로 이지미를 그림
            ctx.drawImage(image, 0, 0,canW,canH);
            
            console.log("-------------------------");
        };


                
        const canvas2 = canvasRef2.current;
        const ctx2 = canvasRef2.current.getContext("2d");

        const image2 = new Image();
        image2.src =imageSrc
    
        image2.onload = function() {
            console.log("-------------------------");
            //입력 파일의 크기를 알아냄
            let inW = image2.width;
            let inH = image2.height;
            console.log("image - size",inW,inH);
      
            // 캔버스 기본 크기
            let canW2 = canvas2.width
            let canH2 = canvas2.height
            console.log("canvas - size1",canW2,canH2);
    
            //캔버스 크기를 결정
            canvas2.width = 700;
            canvas2.height = 500;
            console.log("canvas - size2",canW2,canH2);

            ctx2.drawImage(image2, 0, 0,canW2,canH2*(canW2/inW) );
            // context.drawImage(imageObj, 0, 0, 100, 100 * imageObj.height / imageObj.width)
            // ctx.drawImage(image, 0, 0);
            console.log("-------------------------");
        };
    }

    return (
        <div>
            <div className="search__input" style={{display:'flex'}}>
                <input 
                    type="file"
                    // name="file"
                    multiple={false}
                    accept=".jpg, .jepg, .png"
                    onChange={onLoadFile}
                    ref={fileRef} 
                    // id="search" placeholder="Search..." 
                    style={{ display: 'none' }} 
                />
                <div
                    style={{width : '200px' , heigh:'100px' , border:'1px solid gray'}}
                >
                    {file.name == null ? '' : file.name}
                </div>
                <button onClick={() => fileRef.current.click()}>불러오기</button>
                <button className="btn">분석</button>
            </div>
            <div>이미지 bbox b1 : 0.3,0.4 / b2 : 0.6,0.9</div>
            <div className="img-container">
                <div className="img-box">
                    <div>1. 캔버스 크기에 맞게 늘리기</div>
                    <canvas className="canvas" 
                            id="img-canvas" 
                            ref={canvasRef}
                            width="700px"
                            height="500px"
                            style={{border:'1px solid black' }}
                    >
                    </canvas>
                    <hr />

                    <div>2.캔버스 크기 기준으로 이미지 줄이기 원본 비율 그대로 </div>
                    <canvas className="canvas" 
                            id="img-canvas" 
                            ref={canvasRef2}
                            width="700px"
                            height="500px"
                            style={{border:'1px solid black' }}
                    >
                    </canvas>
                    <hr />

                    <div>3.캔버스와 상관없이 이미지 원복 크기로 출력</div>
                    {
                        imageSrc ? <img src={imageSrc}/>
                        : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;