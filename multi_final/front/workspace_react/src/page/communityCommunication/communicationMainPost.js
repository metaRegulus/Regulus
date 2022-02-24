import React from 'react';

import { Link } from 'react-router-dom';


function communicationMainPost() {
    return (
        <div>
            <h2>소통공간</h2>
            <form action="writerAction" method="post">
                <input type="hidden" name="bdGroup" />
                <input type="hidden" name="bdOrder" />
                <input type="hidden" name="bdIndent" />
                <input type="text" name="bdTitle" class="form-control mt-4 mb-2"
                    placeholder="제목을 입력해주세요." required />
                    <div class="form-group">
                        <textarea class="form-control" rows="10" name="bdContent"
                            placeholder="내용을 입력해주세요" required
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-secondary mb-3">취소하기</button>
                    
                    <button type="submit" class="btn btn-secondary mb-3">등록하기</button>
            </form>
        </div>
    )
}



export default communicationMainPost;