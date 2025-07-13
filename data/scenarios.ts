import { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: "brushing-teeth",
    title: "양치하기",
    description: "아이가 양치를 거부할 때 도움을 주는 시나리오",
    category: "건강관리",
    duration: "30초",
    script: "안녕하세요! 양치는 건강한 치아를 위해 꼭 필요해요. 지금 양치를 하면 충치균들이 모두 사라질 거예요!"
  },
  {
    id: "bedtime",
    title: "잠자리 준비",
    description: "아이가 잠자리에 가기 싫어할 때 사용하는 시나리오",
    category: "수면관리",
    duration: "45초",
    script: "이제 잠잘 시간이에요. 충분한 잠을 자야 내일 더 건강하고 똑똑해질 수 있답니다. 빨리 잠자리로 가볼까요?"
  },
  {
    id: "eating-vegetables",
    title: "야채 먹기",
    description: "편식하는 아이에게 야채의 중요성을 알려주는 시나리오",
    category: "식사예절",
    duration: "40초",
    script: "야채는 우리 몸을 튼튼하게 만들어주는 마법의 음식이에요. 야채를 먹으면 더 키가 크고 힘이 세질 거예요!"
  },
  {
    id: "cleaning-room",
    title: "방 정리하기",
    description: "아이가 정리정돈을 하지 않을 때 도움을 주는 시나리오",
    category: "생활습관",
    duration: "35초",
    script: "정리정돈된 방에서는 더 편안하고 행복하게 지낼 수 있어요. 지금 함께 정리를 시작해볼까요?"
  },
  {
    id: "going-out",
    title: "외출 준비",
    description: "아이가 외출을 준비하지 않을 때 사용하는 시나리오",
    category: "일상생활",
    duration: "30초",
    script: "외출할 때는 준비를 잘 해야 해요. 신발도 신고, 가방도 챙기고, 준비가 끝나면 즐거운 시간을 보낼 수 있어요!"
  },
  {
    id: "stop-misbehaving",
    title: "말 안 듣는 아이",
    description: "아이가 계속 말을 듣지 않을 때 사용하는 엄한 시나리오",
    category: "생활습관",
    duration: "40초",
    script: "호호호... 말을 안 듣는 아이가 있다고 들었는데... 착하지 않은 아이들은 내가 큰 망태에 넣어서 데려간단다. 지금이라도 착하게 말을 들으면 용서해주마."
  },
  {
    id: "tantrum-warning",
    title: "떼쓰는 아이",
    description: "아이가 심하게 떼를 쓸 때 사용하는 경고 시나리오",
    category: "생활습관", 
    duration: "35초",
    script: "어? 여기서 울음소리가 들리는구나... 떼를 쓰는 아이는 내가 가장 싫어한단다. 빨리 그만 울고 착하게 행동하렴. 안 그러면... 호호호..."
  }
];