import React from "react";
import "./Letter.css"
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container letter__container fade-in">
                <span>
                    💜
                </span>
                <span className="letter">
                    형, 안녕. 나 승민이. 전에 썼을 때랑은 느낌이 다르네. 음, 일단 백 일이라는 긴 시간 동안 나랑 함께 해 줘서 고맙다는 이야기를 제일 먼저 하고 싶어. 고마워, 형.
                    나름 100 일이라고 특별한 걸 해 보고 싶었는데 포토샵은 제대로 해 본 적도 없고, 아이디어도 없어서 그냥 내가 할 수 있는 걸 하자 싶어서 만들어 본 거야. 좀 허술하지? 그래도 꽤 오래 걸렸어....... 정성에 비해 결과물은 허술한 것 같은데 마음이라도 전해졌으면 좋겠다.
                    누군가를 생각하면서 무언가에 몰두하는 게 굉장히 소중하다는 걸 하루하루 느끼고 있어. 그게 사랑이든 이렇게 허술한 게임을 만드는 것이든 형으로 귀결된다는 게 참 좋다.
                    정말 사랑은 예상치 못하게 찾아온다는 게 맞는 말인가 봐. 아직도 형을 처음 만났던 순간과 좋아하는 감정이 생기는 그 순간들을 잊을 수가 없다. 이미 형 만난 걸로 모든 운을 다 써서 로또는 욕심 버려야겠어. 그 정도로 내 인생에 큰 변화를 가져다준 사람이야, 형은.
                    형이 선물해 준 책에 정말 공감돼서 계속 기억에 남는 구절이 있어. 어이없음과 사랑을 동시에 느낀다는 말. 우리 어이없다는 말 참 많이 하잖아. 형은 정말 어이없어서 하는 말일 수도 있겠지만 나는 그 안에서 정말 큰 사랑을 느끼거든. 아니, 형도 나 사랑해서 하는 말인 거 맞는 것 같아. 맞지?
                    언제까지고 연애에 서툴다는 말로 핑계 댈 수는 없겠지만 사랑하는 마음 하나는 너무나도 확실하고 그게 형한테 전달되었으면 하는 마음으로 임하고 있으니까 앞으로도 나 오래 데리고 살아 줘.
                </span>
                <span className="letter">
                    P.S. 선물 먼저 골랐을지 편지 먼저 골랐을지는 모르겠지만 편지 먼저 골랐으면 선물도 꼭 가. 코딩 이상하게 해서 선물 선택지까지 가려면 게임을 다시 처음부터 해야 하지만...... 고르지 않았던 선택지 고르면서 다시 해 봐. 그걸 다 만들고 깨달아서 다시 엎기에는 시간이 없었어. 나는 항상 이렇게 하나씩 허점이 있다니까. 인간미로 포장하자. 그러면 진짜 끝. 사랑해.
                </span>
                <span>
                    💜
                </span>
                <Link className="link" to="/">
                    <img className="letter__image" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0L8As%2FbtqZlQF4Jgi%2FBWkEw1VUsen4kDH6NpV1g0%2Fimg.png" alt="ending" />
                </Link>
                <span>
                    💜
                </span>
            </div>
        )
    }
}

export default Home;