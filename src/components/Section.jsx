import React from 'react';
import './Section.css'

const Section = () => {
    const name = 'Alice';
    const age = 25;
    const numbers = [1, 2, 3, 4];
    const obj = {
    city: 'seoul',
    hobby: 'programing',
};
  const isLoggedIn = true; // 예시로 추가

return (
    <div>
        {user.isLogin ?
                (<div className='login'>로그인</div>) :
                (<div className='logout'>로그아웃</div>)
        }

        <p>{isLoggedIn ? <div>hello</div> : <div>goodbye</div>}</p>
        <h1>내 이름은 {name}입니다.</h1>
        <h2>내 나이는 {age}살 입니다.</h2>
        <h3>배열 꺼내서 넣기 {numbers[2]}</h3>
        <h4>객체 꺼내서 넣기 {obj.hobby}</h4>
    </div>
    );
};

export default Section;