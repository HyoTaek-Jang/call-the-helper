import { Character } from "../types";

export const characters: Character[] = [
    {
    id: "doctor",
    name: "이준근 의사",
    image: require("../assets/images/character-doctor.png"),
    description: "건강과 생활습관을 지도하는 믿음직한 의사",
    voiceType: "professional",
    previewAudio: require("../assets/audios/doctor-preview.mp3"),
    scenarios: [
      {
        id: "doctor-discipline",
        title: "훈육",
        description: "건강에 좋지 않은 행동을 할 때 교정해주는 시나리오",
        category: "생활습관",
        duration: "40초",
        script: "여보세요, 이준근입니다. 네, 무슨 일이 있었나요? 음… 그건 건강에도 좋지 않은 행동이네요. 그렇게 하면 몸이 금방 피곤해지고, 감기나 다른 병에 걸리기 쉽습니다. 우리 친구가 지금부터라도 바뀔 수 있나요? 제가 이야기 해볼까요? 농답입니다! 저는 우리 친구를 믿습니다! 하지만 건강을 지키는 습관은 어릴 때부터 만들어야 합니다. 다음에 또 이런 얘기를 들으면, 제가 직접 찾아가서 건강 검진을 해야 할지도 모르겠습니다.",
        audioFile: require("../assets/audios/doctor-discipline.mp3")
      },
      {
        id: "doctor-meal",
        title: "식사",
        description: "식사를 잘 안 하는 아이에게 식사의 중요성을 알려주는 시나리오",
        category: "식사예절",
        duration: "50초",
        script: "네, 여보세요, 이준근 선생님입니다. 네, 우리 친구가 식사를 잘 안 한다고요? 아, 밥을 거르면 몸이 약해지고, 병에 걸릴 가능성이 커집니다. 특히 어린이들은 밥에서 나오는 영양분이 아주 중요해요. 혹시 밥을 조금이라도 먹었나요? 좋아요. 그럼 오늘부터는 한 숟가락이라도 더 먹는 걸 목표로 해봅시다. 밥을 먹으면 키도 쑥쑥 크고, 몸속 군인 같은 세포들이 힘을 낼 수 있습니다. 오늘 저녁에는 꼭 챙겨 먹는 거, 약속하시죠. 약속을 지키면, 다음 진료 때 제가 '튼튼 어린이' 상을 드리겠습니다.",
        audioFile: require("../assets/audios/doctor-meal.mp3")
      }
    ]
  },
  {
    id: "police",
    name: "이유진 순경",
    image: require("../assets/images/character-police.png"),
    description: "안전과 규칙의 중요성을 알려주는 친근한 경찰관",
    voiceType: "stern",
    previewAudio: require("../assets/audios/police-preview.mp3"),
    scenarios: [
      {
        id: "police-praise",
        title: "칭찬",
        description: "아이의 좋은 행동을 칭찬하고 격려해주는 시나리오",
        category: "일상생활",
        duration: "30초",
        script: "여보세요, 어린이의 안전을 책임지는 이유진 순경입니다. 네, 어떤 일로 연락 주셨나요? 오, 그런 일이 있었군요! 정말 멋진 행동이네요. 경찰관은 이런 친구를 아주 자랑스럽게 생각합니다. 앞으로도 이렇게 좋은 모습을 계속 보여줄 수 있겠죠? 좋습니다. 오늘 하루는 덕분에 기분 좋게 보낼 수 있겠네요. 좋은 하루되세요!",
        audioFile: require("../assets/audios/police-praise.mp3")
      },
      {
        id: "police-encouragement",
        title: "격려 응원",
        description: "어려운 상황에서 아이에게 용기와 격려를 주는 시나리오",
        category: "일상생활",
        duration: "30초",
        script: "여보세요~ 이유진 순경입니다. 네! 어떤 일로 연락 주셨나요? 그랬군요. 우리 친구에게 쉽지 않은 상황으로 보이네요. 하지만 용기를 내서 노력하면 꼭 해낼 수 있을 것입니다! 경찰관도 어려운 일을 겪지만, 끝까지 해내면 훨씬 강해집니다. 앞으로도 이렇게 노력할 수 있겠죠? 좋아요. 그 용기, 꼭 기억하시길 바랍니다.",
        audioFile: require("../assets/audios/police-encouragement.mp3")
      }
    ]
  },
  {
    id: "teacher",
    name: "고은 선생님",
    image: require("../assets/images/character-teacher.png"),
    description: "배움과 성장을 도와주는 따뜻한 선생님",
    voiceType: "gentle",
    previewAudio: require("../assets/audios/teacher-preview.mp3"),
    scenarios: [
      {
        id: "teacher-praise",
        title: "칭찬",
        description: "아이의 좋은 행동을 칭찬해주는 시나리오",
        category: "일상생활",
        duration: "45초",
        script: "여보세요, 고은 선생님입니다. 네, 오늘 어떤 일로 연락 주셨나요? 아, 정말요? 그건 너무 멋진 일이에요. 선생님이 생각해도 참 자랑스럽습니다. 오늘 하루가 훨씬 기분 좋아졌네요. 앞으로도 이렇게 멋진 모습 계속 보여줄 수 있겠죠? 좋아요. 선생님이 항상 응원할게요.",
        audioFile: require("../assets/audios/teacher-praise.mp3")
      },
      {
        id: "teacher-friend-conflict",
        title: "친구와 다툼",
        description: "장난감 때문에 친구와 다퉜을 때 해결방법을 알려주는 시나리오",
        category: "일상생활",
        duration: "60초",
        script: "여보세요, 고은 선생님입니다. 네, 장난감 때문에 친구와 다퉜다고요? 그럴 땐 서로 양보하는 게 가장 좋아요. 장난감을 혼자 오래 쓰면 다른 친구가 기다리다가 속상해질 수 있거든요. 혹시 다투기 전에 \"잠시만 기다려줄래?\"라고 말해본 적 있나요? 좋아요. 다음에는 꼭 말로 먼저 이야기해 보세요. 그렇게 하면 서로 기분이 좋아지고, 더 오래 같이 놀 수 있답니다. 선생님이 다음에 장난감 놀이하는 모습을 꼭 보고 싶어요. 그때는 서로 웃으면서 놀 수 있겠죠?",
        audioFile: require("../assets/audios/teacher-friend-conflict.mp3")
      }
    ]
  },
];