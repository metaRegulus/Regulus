import React from 'react';
import { FormControl, InputGroup, SplitButton, Dropdown,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function groupMainPost() {
    return (
        <div>
            <h2>모임찾기</h2>
            <form action="writerAction" method="post">
                <input type="hidden" name="bdGroup" />
                <input type="hidden" name="bdOrder" />
                <input type="hidden" name="bdIndent" />
                <input type="text" name="bdTitle" class="form-control mt-4 mb-2"
                    placeholder="제목을 입력해주세요." required />
                
                <>
                    <InputGroup className="mb-3">
                        <SplitButton
                            variant="outline-secondary"
                            title="카테고리"
                            id="segmented-button-dropdown-1"                        >
                         
                            <Dropdown.Item href="#">스터디</Dropdown.Item>
                            <Dropdown.Item href="#">프로젝트</Dropdown.Item>                            
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </SplitButton>
                        <FormControl aria-label="Text input with dropdown button" placeholder="소제목을 입력해주세요." ></FormControl>
                    </InputGroup>                    
                </>
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



export default groupMainPost;