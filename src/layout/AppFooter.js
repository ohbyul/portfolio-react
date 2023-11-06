import React, { useEffect, useState } from 'react';


const AppFooter = () => {
    return (
        <div id='footer'>
            <div>
                <div className='footer-logo'>
                    {/* <a href='/' className='logo-link'><img src='/images/logo_footer.svg' /></a> */}
                </div>
                <div className='footer-txt'>
                    <div>
                        {/* <span><a data-type="PRIVACY" onClick={onModal}>개인정보처리방침</a></span> */}
                        {/* <span><a data-type="SERVICE" onClick={onModal}>이용약관</a></span> */}
                    </div>
                    <div>
                        <span>BYEOL.OH</span>
                        <span>E-Mail : dhquf8093@naver.com</span>
                    </div>
                    <div className="copyright">COPYRIGHTⒸ 2023 byeol.oh CO All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(AppFooter)
