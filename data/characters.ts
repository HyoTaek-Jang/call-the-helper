import { Character } from "../types";

export const characters: Character[] = [
  {
    id: "police",
    name: "김경찰",
    image: require("../assets/images/character-police.png"),
    description: "안전과 규칙의 중요성을 알려주는 친근한 경찰관",
    voiceType: "stern",
    scenarios: [
      {
        id: "cleaning-room",
        title: "방 정리하기",
        description: "아이가 정리정돈을 하지 않을 때 도움을 주는 시나리오",
        category: "생활습관",
        duration: "35초",
        script: "안녕하세요, 김경찰입니다. 정리정돈은 안전한 생활의 기본이에요. 흩어진 물건들 때문에 다칠 수도 있거든요. 지금 함께 방을 깔끔하게 정리해볼까요?",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "teacher",
    name: "박선생님",
    image: require("../assets/images/character-teacher.png"),
    description: "배움과 성장을 도와주는 따뜻한 선생님",
    voiceType: "gentle",
    scenarios: [
      {
        id: "eating-vegetables",
        title: "야채 먹기",
        description: "편식하는 아이에게 야채의 중요성을 알려주는 시나리오",
        category: "식사예절",
        duration: "40초",
        script: "안녕하세요, 박선생님이에요. 야채는 우리 몸과 두뇌를 건강하게 만들어주는 소중한 음식이에요. 야채를 먹으면 공부도 더 잘하고 키도 쑥쑥 클 거예요!",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "grandma",
    name: "할머니",
    image: require("../assets/images/character-grandma.png"),
    description: "사랑과 지혜를 전해주는 따뜻한 할머니",
    voiceType: "caring",
    scenarios: [
      {
        id: "bedtime",
        title: "잠자리 준비",
        description: "아이가 잠자리에 가기 싫어할 때 사용하는 시나리오",
        category: "수면관리",
        duration: "45초",
        script: "우리 사랑하는 아가야, 할머니야. 이제 잠잘 시간이에요. 푹 자야 꿈나라에서 할머니를 만날 수 있어요. 빨리 이불 속으로 들어가서 좋은 꿈 꾸세요.",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "doctor",
    name: "이의사",
    image: require("../assets/images/character-doctor.png"),
    description: "건강과 생활습관을 지도하는 믿음직한 의사",
    voiceType: "professional",
    scenarios: [
      {
        id: "brushing-teeth",
        title: "양치하기",
        description: "아이가 양치를 거부할 때 도움을 주는 시나리오",
        category: "건강관리",
        duration: "30초",
        script: "안녕하세요! 이의사입니다. 양치는 건강한 치아를 위해 꼭 필요한 치료예요. 지금 양치를 하면 충치균들이 모두 사라지고 하얀 치아를 지킬 수 있어요!",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "firefighter",
    name: "최소방관",
    image: require("../assets/images/character-firefighter.png"),
    description: "용기와 책임감을 가르쳐주는 영웅 소방관",
    voiceType: "heroic",
    scenarios: [
      {
        id: "going-out",
        title: "외출 준비",
        description: "아이가 외출을 준비하지 않을 때 사용하는 시나리오",
        category: "일상생활",
        duration: "30초",
        script: "안녕! 최소방관이야. 외출할 때는 영웅처럼 준비를 철저히 해야 해. 신발, 가방, 모든 것을 챙기고 나가면 멋진 모험이 기다리고 있을 거야!",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "mangtae",
    name: "망태할아범",
    image: require("../assets/images/character-mangtae.png"),
    description: "말 안 듣는 아이들을 교육하는 전통적인 할아범",
    voiceType: "stern",
    scenarios: [
      {
        id: "general-discipline",
        title: "말 안 듣는 아이 교육",
        description: "말 안 듣는 아이에게 올바른 행동을 가르치는 시나리오",
        category: "공통",
        duration: "1분 30초",
        script: `(거칠고 사악한 목소리로)
여보세요?! 망태할아범이요.
예? 무슨 일이시라고요?

[3초간 침묵]

아니, 그런 말 안 듣는 아이가 있다고?!
내가 어떻게 해줬으면 좋겠소?

[3초간 침묵]

좋았어!
망태를 챙겨서 바로 출동해야겠구먼.
(부시럭부시럭 짐 챙기는 소리)

(호탕하게 웃으며)
하하하하하!

거기, 애기 이름이 어떻게 되오?

[2초간 침묵]

예, 예. (종이에 메모하는 소리)
그럼... 주소는?

[2초간 침묵]

오호, 우리 집 바로 앞이구먼!
금방 갈 수 있겠어!
(또 한 번 호탕한 웃음)
하하하하하!

(아쉬운 말투로)
그런데 말이오, 지금 예약이 좀 밀려서…
조금 바쁜 상황이오.

(골똘히 생각하며)
흠… 그래, 좋았어.
아이가 지금부터 말을 잘 듣는다면, 이번 방문은 취소하겠소.

그러니 지금 당장 아이한테, 어떻게 할 건지 물어봐주시오.

[3초간 침묵]

(호탕한 웃음)
허허허! 아주 잘 됐구먼!

또 이런 일이 생기면, 망설이지 말고 연락 주시오.
하지만 아이가 계속 말을 잘 듣는다면...
내가 굳이 갈 일은 없겠지!
(크게 웃으며)
하하하하하!`,
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  }
];