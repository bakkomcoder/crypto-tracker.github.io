// API를 fetch하고 json을 return하는 함수를 만들었다. (Coins.tsx 파일 return 이하에서 API와 관련된 코드를 가져옴)

export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}

// const response = await fetch("https://api.coinpaprika.com/v1/coins");
//       const json = await response.json();

// 이제 useQuery라고 불리는 hook을 사용할거야. (Coins.tsx로 가자)

// 4/14(금)
// fetchCoins는 json을 return 한다. fetchCoins가 끝나면 react query는 그 함수의 데이터를 여기 data에 넣어준다.
// fn Coins() { ...  } ->
