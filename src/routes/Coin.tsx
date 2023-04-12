import { useState } from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  // console.log(state.name); // Home에서 coin 클릭 후 넘어간다면 해당 코인의 이름(state.name)을 확인할 수 있다. -> 타이틀에 coin의 이름을 직접 뿌려줄 수 있다는 것!
  // 이렇게 함으로써 Coin component에서 API를 부르지 않는다. 여기서 발생하는 문제가, home에서 coin을 누를 경우만 state를 전달 받아서 Coin 화면에 뿌려지는 건데
  // 곧바로 Coin 화면으로 간다면 에러가 난다는 것. state가 정의되지 않았다. => 해결하기 위해 조건문 작성(null일 때 보여줄 화면 만들어줌)
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
