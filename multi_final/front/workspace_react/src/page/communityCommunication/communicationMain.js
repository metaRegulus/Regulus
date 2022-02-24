import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function communicationMain() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>이렇게 하는거 맞나요?</td>
                        <td>정현희</td>
                        <td>2022.2.13</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>아 너무 어렵네요. 좀 알려주세요</td>
                        <td>정현희</td>
                        <td>2022.2.14</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>일단 그냥 해보겠습니다. 조언 부탁드립니다.</td>
                        <td>정현희</td>
                        <td>2022.2.15</td>
                    </tr>

                    <button className="btn btn-secondary mb-3" >
                    <Link to="/communicationMainPost" class="link-dark" style={{ textDecoration: 'none' }}>글쓰기</Link></button>
                </tbody>
            </Table>
        </div>
    )
}



export default communicationMain;